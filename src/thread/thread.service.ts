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
import { MenuService } from 'src/menu/menu.service';

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
      const { text, sender } = processText(message, senderNumber);
      const user = await this.userService.findUser(senderNumber);
      if (!user) {
        throw new BadRequestException('user not found in database');
      }
      // Verifica se o usuário digitou uma opção de menu
      if (detectMenu(text)) {
        const openedConversation =
          await this.conversationService.findOpenedConversation(user.id);
        if (openedConversation) {
          const ccvs = await this.conversationService.desactiveLastConversation(
            openedConversation.id,
          );
        }
        return this.menuService.sendInteractiveMessage(sender);
      }

      const conversationOpened =
        await this.conversationService.findOpenedConversation(user.id);
      if (conversationOpened.assistantId === 'asst_Hv2WQuoOA4ncLSbysZBCoTkc') {
        return await this.documentService.createThreadAndGetMessage(
          text,
          senderNumber,
        );
      }

      let threadCreated;
      let threadUpdated;
      // Verifica se não existe uma conversa aberta
      if (!conversationOpened) {
        return "você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.";
      }
      // Cria uma mensagem na base
      const messageInput = {
        type: 'text',
        value: text,
      };
      const messageInDb =
        await this.conversationService.createMessage(messageInput);

      // Cria uma conversa com a mensagem na base
      const conversationMessage = {
        conversationId: conversationOpened.id,
        messageId: messageInDb.id,
        isInput: true,
      };
      await this.conversationService.createConversationMessage(
        conversationMessage,
      );

      // Verifica se o usuário selecionou uma opção, mas ainda não tem a thread criada e salva na conversa
      if (conversationOpened.assistantId && !conversationOpened.threadId) {
        threadCreated = await this.conversationService.createConversation(
          conversationOpened.assistantId,
          text,
        );

        // Verifica qual é a assistant do usuário e envia a mensagem de aguarde de acordo
        if (threadCreated) {
          console.log(conversationOpened);
          if (contratosAssistants.includes(conversationOpened.assistantId)) {
            await this.replyService.replyMessageContrato(sender);
          }
          if (
            conversationOpened.assistantId === 'asst_PnosQim2RndvcNgW0yQiKx1M'
          ) {
            await this.replyService.replyMessageAuxiliar(sender);
          }
          if (
            conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            await this.replyService.replyMessageNotificacao(sender);
          }
          if (
            !contratosAssistants.includes(conversationOpened.assistantId) &&
            conversationOpened.assistantId != 'asst_PnosQim2RndvcNgW0yQiKx1M' &&
            conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            await this.replyService.replyMessagePeca(sender);
          }

          threadUpdated = await this.conversationService.updateConversationInDb(
            conversationOpened.id,
            threadCreated.thread_id,
          );
        }

        let respostaGpt;
        const conversationUpdatedOpened =
          await this.conversationService.findOpenedConversation(user.id);

        // Chama a função getMessages para conseguir a resposta que o bot retornou
        respostaGpt = await this.conversationService.getMessages(
          conversationUpdatedOpened.threadId,
        );

        // Looping para tentar pegar a resposta caso a primeira tentativa falhe
        if (!respostaGpt) {
          let tentativa = 0;
          while (!respostaGpt && tentativa < 5) {
            tentativa++;
            respostaGpt = await this.conversationService.getMessages(
              conversationUpdatedOpened.threadId,
            );
          }
        }

        // Verifica se a resposta do GPT é diferente do input, se sim cria uma mensagem e salva na base
        if (respostaGpt.data.response != text) {
          const message = {
            type: 'text',
            value: respostaGpt.data.response,
          };
          const messageInDb =
            await this.conversationService.createMessage(message);
          const conversationMessage = {
            conversationId: conversationUpdatedOpened.id,
            messageId: messageInDb.id,
            isInput: false,
          };
          await this.conversationService.createConversationMessage(
            conversationMessage,
          );
        }

        // Função que divide a mensagem caso exceda 3800 caracteres
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

        // Verifica se o tamanho da resposta excede 3800 caracteres e divide a mensagem se necessário
        if (respostaGpt.data.response.length > 3800) {
          const parts = splitMessage(respostaGpt.data.response, 3800);
          for (const part of parts) {
            answerGptResult = await this.replyService.replyAnswerGpt(
              sender,
              part,
            );
          }
        } else {
          answerGptResult = await this.replyService.replyAnswerGpt(
            sender,
            respostaGpt.data.response,
          );
        }

        // Verifica se a resposta veio correta e retorna a mensagem de menu após a resposta do GPT
        if (answerGptResult) {
          if (
            respostaGpt.data.isResult &&
            conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            return await this.replyService.replyAfterAnswerNotificacao(sender);
          }
          if (
            respostaGpt.data.isResult &&
            contratosAssistants.includes(conversationOpened.assistantId)
          ) {
            return await this.replyService.replyAfterAnswerContrato(sender);
          }
          if (
            respostaGpt.data.isResult &&
            !contratosAssistants.includes(conversationOpened.assistantId) &&
            conversationOpened.assistantId != 'asst_PnosQim2RndvcNgW0yQiKx1M' &&
            conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            return await this.replyService.replyAfterAnswerPeca(sender);
          }
        }
        return true;
      }

      // Verifica se existe alguma thread na conversa em aberto do usuário
      if (conversationOpened.threadId) {
        let respostaGpt = null;
        const conversationUpdatedOpened =
          await this.conversationService.findOpenedConversation(user.id);

        // Verifica qual é a assistant do usuário e envia a mensagem de aguarde de acordo
        if (contratosAssistants.includes(conversationOpened.assistantId)) {
          await this.replyService.replyMessageContrato(sender);
        }
        if (
          conversationOpened.assistantId === 'asst_PnosQim2RndvcNgW0yQiKx1M'
        ) {
          await this.replyService.replyMessageAuxiliar(sender);
        }
        if (
          conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
        ) {
          await this.replyService.replyMessageNotificacao(sender);
        }
        if (
          !contratosAssistants.includes(conversationOpened.assistantId) &&
          conversationOpened.assistantId != 'asst_PnosQim2RndvcNgW0yQiKx1M' &&
          conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
        ) {
          await this.replyService.replyMessagePeca(sender);
        }

        // Cria uma nova mensagem com a thread desejada e executa a thread
        const createNewMessageOpenAI =
          await this.conversationService.createNewMessageOpenAI(
            conversationUpdatedOpened.threadId,
            text,
          );
        const runThread = await this.conversationService.runThread(
          conversationUpdatedOpened.threadId,
          conversationUpdatedOpened.assistantId,
        );

        // Chama a função getMessages para conseguir a resposta que o bot retornou
        respostaGpt = await this.conversationService.getMessages(
          conversationUpdatedOpened.threadId,
        );

        // Looping para tentar pegar a resposta caso a primeira tentativa falhe
        if (!respostaGpt) {
          let tentativa = 0;
          while (!respostaGpt && tentativa < 5) {
            tentativa++;
            respostaGpt = await this.conversationService.getMessages(
              conversationUpdatedOpened.threadId,
            );
          }
        }

        // Verifica se a resposta do GPT é diferente do input, se sim cria uma mensagem e salva na base
        if (respostaGpt.data.response != text) {
          const message = {
            type: 'text',
            value: respostaGpt.data.response,
          };

          const messageInDb =
            await this.conversationService.createMessage(message);

          const conversationMessage = {
            conversationId: conversationUpdatedOpened.id,
            messageId: messageInDb.id,
            isInput: false,
          };

          await this.conversationService.createConversationMessage(
            conversationMessage,
          );

          // Função que divide a mensagem caso exceda 3800 caracteres
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

          // Verifica se o tamanho da resposta excede 3800 caracteres e divide a mensagem se necessário
          if (respostaGpt.data.response.length > 3800) {
            const parts = splitMessage(respostaGpt.data.response, 3800);
            for (const part of parts) {
              answerGptResult = await this.replyService.replyAnswerGpt(
                sender,
                part,
              );
            }
          } else {
            answerGptResult = await this.replyService.replyAnswerGpt(
              sender,
              respostaGpt.data.response,
            );
          }

          // Verifica se a resposta veio correta e retorna a mensagem de menu após a resposta do GPT
          if (answerGptResult) {
            if (
              respostaGpt.data.isResult &&
              conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
            ) {
              return await this.replyService.replyAfterAnswerNotificacao(
                sender,
              );
            }
            if (
              respostaGpt.data.isResult &&
              contratosAssistants.includes(conversationOpened.assistantId)
            ) {
              return await this.replyService.replyAfterAnswerContrato(sender);
            }
            if (
              respostaGpt.data.isResult &&
              !contratosAssistants.includes(conversationOpened.assistantId) &&
              conversationOpened.assistantId !=
                'asst_PnosQim2RndvcNgW0yQiKx1M' &&
              conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
            ) {
              return await this.replyService.replyAfterAnswerPeca(sender);
            }
          }

          return true;
        }
      }
    } else if (message.audio) {
      const { transcript, sender } = await processAudio(message, senderNumber);
      const user = await this.userService.findUser(senderNumber);
      if (!user) {
        throw new BadRequestException('user not found in database');
      }
      let threadCreated;
      let threadUpdated;

      /* Verifica se o usuário possui alguma conversa em aberto */
      const conversationOpened =
        await this.conversationService.findOpenedConversation(user.id);

      /* if(user selecionou uma opção, e no momento só tem a assistant_id, sem a thread criada e salva na sua conversa) */
      if (conversationOpened.assistantId && !conversationOpened.threadId) {
        let respostaGpt;
        /* Nesse momento é chamado a api da OpenAI e uma thread é criada e já ativada, com a mensagem e a assistant desejada */
        threadCreated = await this.conversationService.createConversation(
          conversationOpened.assistantId,
          transcript,
        );

        /* Nesse momento ele verifica se a thread foi criada, e retorna a mensagem de aguarde para o usuário, e após isso salva a thread na conversa do usuário */
        if (threadCreated) {
          await this.replyService.replyMessagePeca(sender);
          threadUpdated = await this.conversationService.updateConversationInDb(
            conversationOpened.id,
            threadCreated.thread_id,
          );
        }

        /* Nesse momento ele chama a conversa aberta do usuário para captar a threadId */
        const conversationUpdatedOpened =
          await this.conversationService.findOpenedConversation(user.id);

        /* Nesse momento chamamos a função getMessages para conseguir a resposta que o bot retornou */
        respostaGpt = await this.conversationService.getMessages(
          conversationUpdatedOpened.threadId,
        );

        /* Caso a resposta a cima retorne false, criamos um looping para ele rodar até pegar a mensagem. (respostaGpt vem false por causa do tamanho da petição que vem grande, por isso as vezes vem sem resposta) */
        if (!respostaGpt) {
          let tentativa = 0;
          while (!respostaGpt && tentativa < 5) {
            tentativa++;
            respostaGpt = await this.conversationService.getMessages(
              conversationUpdatedOpened.threadId,
            );
          }
        }

        /* Nesse momento verificamos se a resposta do gpt é diferente do input, se sim criamos uma mensagem e colocamos dentro de uma conversation na nossa base */
        if (respostaGpt.data.response != transcript) {
          const message = {
            type: 'text',
            value: respostaGpt.data.response,
          };
          const messageInDb =
            await this.conversationService.createMessage(message);
          const conversationMessage = {
            conversationId: conversationUpdatedOpened.id,
            messageId: messageInDb.id,
            isInput: false,
          };
          await this.conversationService.createConversationMessage(
            conversationMessage,
          );
        }

        /* Função que divide a mensagem caso exceda 3800 caracteres */
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

        /* Nesse momento verificamos se o tamanho da resposta excede 3800 (limite da api do wpp é 4096), se exceder ele dividi a mensagem. */
        if (respostaGpt.data.response.length > 3800) {
          const parts = splitMessage(respostaGpt.data.response, 3800);
          for (const part of parts) {
            answerGptResult = await this.replyService.replyAnswerGpt(
              sender,
              part,
            );
          }
        } else {
          answerGptResult = await this.replyService.replyAnswerGpt(
            sender,
            respostaGpt.data.response,
          );
        }

        /* Nesse momento verificamos se a resposta veio toda correta e não aconteceu nenhum bug, caso tudo certo ele verifica se é uma peça/contrato final e retorna uma mensagem com menu após a resposta do gpt. */
        if (answerGptResult) {
          if (
            respostaGpt.data.isResult &&
            conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            return await this.replyService.replyAfterAnswerNotificacao(sender);
          }
          if (
            respostaGpt.data.isResult &&
            contratosAssistants.includes(conversationOpened.assistantId)
          ) {
            return await this.replyService.replyAfterAnswerContrato(sender);
          }
          if (
            respostaGpt.data.isResult &&
            !contratosAssistants.includes(conversationOpened.assistantId) &&
            conversationOpened.assistantId != 'asst_PnosQim2RndvcNgW0yQiKx1M' &&
            conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
          ) {
            return await this.replyService.replyAfterAnswerPeca(sender);
          }
        }

        return true;
      }

      /* Nesse momento verificamos se existe alguma thread na conversa em aberto do usuário */
      if (conversationOpened.threadId) {
        let respostaGpt;

        /* Chama a conversa em aberto do usuário */
        const conversationUpdatedOpened =
          await this.conversationService.findOpenedConversation(user.id);

        /* Se não tiver uma conversa em aberto ele retorna, se tiver ele verifica qual é a assistant do usuário e ve se é de contrato, peça, notificação ou auxiliar, e retorna a mensagem de aguarde de acordo. */
        if (!conversationOpened) {
          return "você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.";
        }
        if (contratosAssistants.includes(conversationOpened.assistantId)) {
          await this.replyService.replyMessageContrato(sender);
        }
        if (
          conversationOpened.assistantId === 'asst_PnosQim2RndvcNgW0yQiKx1M'
        ) {
          await this.replyService.replyMessageAuxiliar(sender);
        }
        if (
          conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
        ) {
          await this.replyService.replyMessageNotificacao(sender);
        }
        if (
          !contratosAssistants.includes(conversationOpened.assistantId) &&
          conversationOpened.assistantId != 'asst_PnosQim2RndvcNgW0yQiKx1M' &&
          conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
        ) {
          await this.replyService.replyMessagePeca(sender);
        }

        /* Nesse momento ele cria uma mensagem com a thread desejada */
        const createNewMessageOpenAI =
          await this.conversationService.createNewMessageOpenAI(
            conversationUpdatedOpened.threadId,
            transcript,
          );

        /* Nesse momento é feito run na thread e ela é executada */
        const runThread = await this.conversationService.runThread(
          conversationUpdatedOpened.threadId,
          conversationUpdatedOpened.assistantId,
        );

        /* Nesse momento chamamos a função getMessages para conseguir a resposta que o bot retornou */
        respostaGpt = await this.conversationService.getMessages(
          conversationUpdatedOpened.threadId,
        );

        /* Caso a resposta a cima retorne false, criamos um looping para ele rodar até pegar a mensagem. (respostaGpt vem false por causa do tamanho da petição que vem grande, por isso as vezes vem sem resposta) */
        let tentativa = 0;
        while (!respostaGpt && tentativa < 5) {
          tentativa++;
          respostaGpt = await this.conversationService.getMessages(
            conversationUpdatedOpened.threadId,
          );
        }

        /* Nesse momento verificamos se a resposta do gpt é diferente do input, se sim criamos uma mensagem e colocamos dentro de uma conversation na nossa base */
        if (respostaGpt.data.response != transcript) {
          const message = {
            type: 'text',
            value: respostaGpt.data.response,
          };

          const messageInDb =
            await this.conversationService.createMessage(message);

          const conversationMessage = {
            conversationId: conversationUpdatedOpened.id,
            messageId: messageInDb.id,
            isInput: false,
          };

          await this.conversationService.createConversationMessage(
            conversationMessage,
          );

          /* Função que divide a mensagem caso exceda 3800 caracteres */
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

          /* Nesse momento temos verificamos se o tamanho da resposta excede 3800 (limite da api do wpp é 4096), se exceder ele dividi a mensagem. */
          if (respostaGpt.data.response.length > 3800) {
            const parts = splitMessage(respostaGpt.data.response, 3800);
            for (const part of parts) {
              answerGptResult = await this.replyService.replyAnswerGpt(
                sender,
                part,
              );
            }
          } else {
            answerGptResult = await this.replyService.replyAnswerGpt(
              sender,
              respostaGpt.data.response,
            );
          }

          /* Nesse momento verificamos se a resposta veio toda correta e não aconteceu nenhum bug, caso tudo certo ele verifica se é uma peça/contrato final e retorna uma mensagem com menu após a resposta do gpt. */
          if (answerGptResult) {
            if (
              respostaGpt.data.isResult &&
              conversationOpened.assistantId === 'asst_OshFRCvLJUIO7b5nkGodEq7H'
            ) {
              return await this.replyService.replyAfterAnswerNotificacao(
                sender,
              );
            }
            if (
              respostaGpt.data.isResult &&
              contratosAssistants.includes(conversationOpened.assistantId)
            ) {
              return await this.replyService.replyAfterAnswerContrato(sender);
            }
            if (
              respostaGpt.data.isResult &&
              !contratosAssistants.includes(conversationOpened.assistantId) &&
              conversationOpened.assistantId !=
                'asst_PnosQim2RndvcNgW0yQiKx1M' &&
              conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
            ) {
              return await this.replyService.replyAfterAnswerPeca(sender);
            }
          }
          return true;
        }
      }
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
