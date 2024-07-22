import { BadRequestException, Injectable } from '@nestjs/common';
import { ConversationService } from 'src/core/integrations/conversation.service';
import { UserService } from 'src/core/integrations/user.service';
import { ReplyService } from 'src/core/replyes/reply.service';
import { contratosAssistants } from 'src/core/utils/cache';
import { detectMenu } from 'src/core/utils/detectMenu';
import { processAudio } from 'src/core/utils/processAudio';
import { processText } from 'src/core/utils/processText';
import { EventService } from 'src/events/event.service';
import { DocumentoService } from 'src/menu/documentos/documentos.service';
import { MenuService } from '../menu/menu.service';

@Injectable()
export class ThreadService {
  constructor(
    private replyService: ReplyService,
    private conversationService: ConversationService,
    private menuService: MenuService,
    private userService: UserService,
    private documentService: DocumentoService,
    private eventService: EventService,
  ) {}

  async conversation(message, senderNumber) {
    if (message.text) {
      return await this.handleTextMessage(message, senderNumber);
    } else if (message.audio) {
      return await this.handleAudioMessage(message, senderNumber);
    }
  }

  async handleTextMessage(message, senderNumber) {
    const { text, sender } = processText(message, senderNumber);
    const user = await this.userService.findUser(senderNumber);
    if (!user) {
      throw new BadRequestException('user not found in database');
    }

    // Verifica se o usuário digitou uma opção de menu
    if (detectMenu(text)) {
      await this.handleMenuOption(user.id, sender);
      return;
    }

    const conversationOpened =
      await this.conversationService.findOpenedConversation(user.id);
    if (!conversationOpened) {
      return "você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.";
    }

    await this.createMessageInDb(text, conversationOpened.id);

    if (conversationOpened.assistantId && !conversationOpened.threadId) {
      return await this.handleNewThread(conversationOpened, text, sender);
    } else if (conversationOpened.threadId) {
      return await this.handleExistingThread(conversationOpened, text, sender);
    }
  }

  async handleMenuOption(userId, sender) {
    const openedConversation =
      await this.conversationService.findOpenedConversation(userId);
    if (openedConversation) {
      await this.conversationService.desactiveLastConversation(
        openedConversation.id,
      );
    }
    return this.menuService.sendInteractiveMessage(sender);
  }

  async createMessageInDb(text, conversationId) {
    const messageInput = { type: 'text', value: text };
    const messageInDb =
      await this.conversationService.createMessage(messageInput);
    const conversationMessage = {
      conversationId,
      messageId: messageInDb.id,
      isInput: true,
    };
    await this.conversationService.createConversationMessage(
      conversationMessage,
    );
  }

  async handleNewThread(conversationOpened, text, sender) {
    const threadCreated = await this.conversationService.createConversation(
      conversationOpened.assistantId,
      text,
    );
    if (threadCreated) {
      await this.replyService.replyMessageBasedOnAssistant(
        conversationOpened.assistantId,
        sender,
      );
      await this.conversationService.updateConversationInDb(
        conversationOpened.id,
        threadCreated.thread_id,
      );
    }
    const conversationUpdatedOpened =
      await this.conversationService.findOpenedConversation(
        conversationOpened.userId,
      );
    return await this.handleThreadMessages(
      conversationUpdatedOpened,
      text,
      sender,
    );
  }

  async handleExistingThread(conversationOpened, text, sender) {
    const conversationUpdatedOpened =
      await this.conversationService.findOpenedConversation(
        conversationOpened.userId,
      );
    await this.replyService.replyMessageBasedOnAssistant(
      conversationOpened.assistantId,
      sender,
    );
    await this.conversationService.createNewMessageOpenAI(
      conversationUpdatedOpened.threadId,
      text,
    );
    await this.conversationService.runThread(
      conversationUpdatedOpened.threadId,
      conversationUpdatedOpened.assistantId,
    );
    return await this.handleThreadMessages(
      conversationUpdatedOpened,
      text,
      sender,
    );
  }

  async handleThreadMessages(conversationUpdatedOpened, text, sender) {
    let respostaGpt;
    let tentativa = 0;

    try {
      while (!respostaGpt && tentativa < 5) {
        tentativa++;
        respostaGpt = await this.conversationService.getMessages(
          conversationUpdatedOpened.threadId,
        );
      }

      if (respostaGpt && respostaGpt.data.response != text) {
        await this.saveGptResponse(
          respostaGpt.data.response,
          conversationUpdatedOpened.id,
        );
      }

      await this.sendGptResponse(
        respostaGpt ? respostaGpt.data.response : '',
        sender,
        conversationUpdatedOpened.assistantId,
      );
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Message processed successfully',
        }),
      };
    } catch (error) {
      console.error('Error processing thread messages:', error);
      await this.sendGptResponse(
        'Error occurred while processing your message.',
        sender,
        conversationUpdatedOpened.assistantId,
      );
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Message processed with errors',
          error: error.message,
        }),
      };
    }
  }

  async saveGptResponse(response, conversationId) {
    const message = { type: 'text', value: response };
    const messageInDb = await this.conversationService.createMessage(message);
    const conversationMessage = {
      conversationId,
      messageId: messageInDb.id,
      isInput: false,
    };
    await this.conversationService.createConversationMessage(
      conversationMessage,
    );
  }

  async sendGptResponse(response, sender, assistantId) {
    const splitMessage = (message, maxLength) => {
      let parts = [];
      while (message.length > maxLength) {
        let part = message.slice(0, maxLength);
        message = message.slice(maxLength);
        parts.push(part);
      }
      parts.push(message);
      return parts;
    };

    let answerGptResult = false;
    if (response.length > 3800) {
      const parts = splitMessage(response, 3800);
      for (const part of parts) {
        answerGptResult = await this.replyService.replyAnswerGpt(sender, part);
      }
    } else {
      answerGptResult = await this.replyService.replyAnswerGpt(
        sender,
        response,
      );
    }

    if (answerGptResult) {
      if (assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H') {
        return await this.replyService.replyAfterAnswerNotificacao(sender);
      }
      if (contratosAssistants.includes(assistantId)) {
        return await this.replyService.replyAfterAnswerContrato(sender);
      }
      return await this.replyService.replyAfterAnswerPeca(sender);
    }
    return true;
  }

  async handleAudioMessage(message, senderNumber) {
    const { transcript, sender } = await processAudio(message, senderNumber);
    const user = await this.userService.findUser(senderNumber);
    if (!user) {
      throw new BadRequestException('user not found in database');
    }

    const conversationOpened =
      await this.conversationService.findOpenedConversation(user.id);
    if (conversationOpened.assistantId && !conversationOpened.threadId) {
      return await this.handleNewThread(conversationOpened, transcript, sender);
    } else if (conversationOpened.threadId) {
      return await this.handleExistingThread(
        conversationOpened,
        transcript,
        sender,
      );
    }
  }

  async documentConversation(document, senderNumber: string) {
    const documentProcessed = await this.documentService.processDocument(
      document,
      senderNumber,
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Document processed and sent successfully',
        document: documentProcessed,
      }),
    };
  }

  async leadConversation(message, senderNumber: string) {
    const lead = await this.userService.getLead(senderNumber);
    if (!lead) {
      throw new BadRequestException('lead not found');
    }
    if (message.text) {
      try {
        const { text, sender } = processText(message, senderNumber);
        if (text == 'Oi, EstagIArio! Quero entrar para a lista de espera.') {
          await this.replyService.replyLead(senderNumber, lead.waitListNumber);
          await this.replyService.replyLeadOption(senderNumber);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
