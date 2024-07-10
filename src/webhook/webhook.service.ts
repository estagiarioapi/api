import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { promises as fs } from 'fs';
import { FluxoService } from 'src/fluxo/fluxo.service';
import { ConversationService } from '../core/integrations/conversation.service';
import { UserService } from '../core/integrations/user.service';
import { ReplyService } from '../core/replyes/reply.service';
import { detectMenu } from '../core/utils/detectMenu';
const existingAssistantId = 'asst_k3hihCq0BbmquqRptSf8J858';
const existingVectorStoreId = 'vs_VkV662jbqd9Rigx9SQIB3hdA';
const contratosAssistants = [
  'asst_etxHCk9nHcPrdWpyFn7HsI4N',
  'asst_UuAFNNYybmrAhVVFjoV9sZlF',
  'asst_UvWfEqs5Xf0D1L5j3yOn3C6E',
  'asst_osIV8UVg1F4AfrPvmxPjKKSt',
  'asst_1oSRbpqhHAu6xbSeoIGA9IiQ',
  'asst_xB8wVqSuKWFM3dwqnohyGpnL',
  'asst_AdbHdgomEkq95nyLd5yPsayP',
  'asst_ERdv7VDrGiO5aFNUa31HCXDl',
  'asst_3hC4OwOY6YzeKVVaS8grevTX',
  'asst_SLcqbgHJSVzrIOJxs0rAOC9i',
  'asst_fgmC77heRQKAl9jGqM02sbis',
  'asst_2C1GjP7zX1mnHY9V6UGQDL92',
  'asst_MxGIUM4co90MIEYFUfshcQ4D',
  'asst_Hz2LNE7lWj0xpqWGrfZ6SuRH',
  'asst_1j0RiEu9x8WPKi98a73varQa',
  'asst_q32pzxH7HWQIWqikE2zrNVEU',
  'asst_cYqft3F0LpRyL5O0bt4JXlnQ',
  'asst_D4rpKKrdiPx8S0ZGUUxw5pUd',
  'asst_ppRjaaJC1LYaOwpOE5lpeuV0',
  'asst_qfYcSX5bZCn1A7BjBohnYgr2',
  'asst_GgJG1x1btieUeKj5g5z1F4Ty',
  'asst_7UkjQypTHPBgz2Iu5kSIpwMh',
  'asst_U9Xatm1sMwV1IiZiE50MhyQn',
  'asst_bDkYfcdHJKIKtJyT9U8WmCT1',
  'asst_Hv2WQuoOA4ncLSbysZBCoTkc',
  'asst_lgKqhjocvSTu80wy8E8pfnYm',
  'asst_iPe7ypYaccWteEIFHcPrdgL6',
  'asst_EnrFjS4nA3iVsE73TT2ZKdqX',
  'asst_UYS9MpuizAPxTAgMqIEBbPy5',
  'asst_CroZkh7buvpzTIOWXNyVGKhH',
  'asst_IXxKqy6OhBidZWrJDDQ3nQcx',
  'asst_fplN3Q40gq0ptGzSHtw7dIT9',
  'asst_PMV25oPX1rvGEOO2nmcC5lHT',
  'asst_cw4CCrkhdYZ33flf6Z7GeG0j',
  'asst_4FKLgn6cqZkA8RA0nI5JCKTc',
  'asst_HG9h1PX3TQXO59r97zGWY47o',
  'asst_YqAS9cbNTucLmpVDEIrUCd43',
  'asst_WC3s6HP5XsMUtGQHhUN2JNJD',
  'asst_ryl3p0iugtmREL07EgSggL0d',
  'asst_M7Aw75sSm7XC1iOW4YnY1gYz',
  'asst_m9lPMoZzx40gjl41AmsFKLIT',
  'asst_EOI18sTeQPqn6J4mRAiySBMo',
  'asst_Y6W3bxRVlHyVvy7ZGr4JcUxv',
  'asst_k6Osw0BaWiXJPpHBSiFZr9o8',
];
@Injectable()
export class WebhookService {
  constructor(
    private fluxoService: FluxoService,
    private userService: UserService,
    private conversationService: ConversationService,
    private replyService: ReplyService,
  ) {}

  async processMessage(event: any): Promise<any> {
    try {
      const body = JSON.parse(event.body);
      const message = body.entry[0].changes[0].value.messages[0];
      const senderNumber = message.from;
      const user = await this.userService.findUser(senderNumber);
      let thread;
      if (!user) {
        throw new BadRequestException('user not found in database');
      }

      if (message.document) {
        const { threadId, runId, sender } = await this.processDocument(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Document processed and sent successfully',
            threadId: threadId,
            run_id: runId,
            sender_number: sender,
          }),
        };
      } else if (message.audio) {
        const { transcript, sender } = await this.processAudio(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Audio processed and transcribed successfully',
            transcript: transcript,
            sender_number: sender,
          }),
        };
      } else if (message.text) {
        const { text, sender } = await this.processText(message, senderNumber);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Text message processed successfully',
            response_message: text,
            sender_number: sender,
          }),
        };
      } else {
        throw new Error('Unsupported message type');
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error processing message',
          error: error.message,
        }),
      };
    }
  }

  async processText(message: any, sender: string) {
    const text = message.text.body;

    return { text, sender };
  }

  async uploadFileAndGetFileId(filePath: string, fileName: string) {
    const fileBuffer = await fs.readFile(filePath);
    const form = new FormData();
    form.append('file', fileBuffer, {
      filename: fileName,
      contentType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    form.append('purpose', 'assistants');

    const response = await axios.post('https://api.openai.com/v1/files', form, {
      headers: {
        Authorization: process.env.OPENAI_KEY,
        'OpenAI-Beta': 'assistants=v2',
        ...form.getHeaders(),
      },
    });

    const data = response.data;
    return data.id;
  }

  async addFileToVectorStore(fileId: string, vectorStoreId: string) {
    const response = await axios.post(
      `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`,
      { file_id: fileId },
      {
        headers: {
          Authorization: process.env.OPENAI_KEY,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data;
  }

  async createThreadWithFile(
    fileId: string,
    userMessage: string,
    vectorStoreId: string,
  ) {
    const response = await axios.post(
      'https://api.openai.com/v1/threads',
      {
        messages: [
          {
            role: 'user',
            content: userMessage,
            attachments: [
              { file_id: fileId, tools: [{ type: 'file_search' }] },
            ],
          },
        ],
        tool_resources: {
          file_search: { vector_store_ids: [vectorStoreId] },
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.OPENAI_KEY,
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data.id;
  }

  async runThread(threadId: string, assistantId: string) {
    const response = await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/runs`,
      { assistant_id: assistantId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.OPENAI_KEY,
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data.id;
  }

  async transcribeAudio(filePath: string, fileName: string) {
    const fileBuffer = await fs.readFile(filePath);
    const form = new FormData();
    form.append('file', fileBuffer, {
      filename: fileName,
      contentType: 'audio/mpeg',
    });
    form.append('model', 'whisper-1');
    const response = await axios.post(
      'https://api.openai.com/v1/audio/transcriptions',
      form,
      {
        headers: {
          Authorization:
            'Bearer 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',
          ...form.getHeaders(),
        },
      },
    );

    const data = response.data;
    return data.text;
  }

  async processDocument(message: any, sender: string) {
    try {
      const documentId = message.document.id;
      const fileName = message.document.filename;
      const mimeType = message.document.mime_type;
      if (
        mimeType !==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        throw new Error(
          `Unsupported file type: ${mimeType}. Only DOCX files are supported.`,
        );
      }

      const urlDownload = `https://graph.facebook.com/v14.0/${documentId}`;
      const documentResponse = await axios.get(urlDownload, {
        headers: { Authorization: process.env.ACCESS_TOKEN },
      });
      const documentData = documentResponse.data;
      const fileUrl = documentData.url;
      const fileResponse = await axios.get(fileUrl, {
        headers: { Authorization: process.env.ACCESS_TOKEN },
        responseType: 'arraybuffer',
      });

      const buffer = fileResponse.data;
      const filePath = `/tmp/${fileName}`;
      await fs.writeFile(filePath, Buffer.from(buffer));

      // Step 1: Upload the file to OpenAI and get the file_id
      const fileId = await this.uploadFileAndGetFileId(filePath, fileName);

      // Step 2: Add the file to the existing vector store
      await this.addFileToVectorStore(fileId, existingVectorStoreId);

      // Step 3: Create a thread with the file attached
      const threadId = await this.createThreadWithFile(
        fileId,
        'Please analyze the document.',
        existingVectorStoreId,
      );

      // Step 4: Run the thread
      const runId = await this.runThread(threadId, existingAssistantId);

      return { threadId, runId, sender };
    } catch (error) {
      console.error(error);
    }
  }

  async processAudio(message: any, sender: string) {
    const audioId = message.audio.id;
    const fileName = `${audioId}.mp3`;

    const urlDownload = `https://graph.facebook.com/v14.0/${audioId}`;
    const audioResponse = await axios.get(urlDownload, {
      headers: {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      },
    });

    const audioData = audioResponse.data;
    const fileUrl = audioData.url;

    const fileResponse = await axios.get(fileUrl, {
      headers: {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      },
      responseType: 'arraybuffer',
    });

    const buffer = fileResponse.data;
    const filePath = `/tmp/${fileName}`;
    await fs.writeFile(filePath, Buffer.from(buffer));

    const transcript = await this.transcribeAudio(filePath, fileName);

    return { transcript, sender };
  }

  async handler(event: any) {
    try {
      const changes = event.entry[0].changes[0].value;
      if (!changes.messages) {
        throw new BadRequestException('No messages found in the received body');
      }
      console.log('changes:', changes.messages);

      const message = changes.messages[0];
      const senderNumber = message.from;
      const user = await this.userService.findUser(senderNumber);

      if (!user) {
        throw new BadRequestException('User not found in database');
      }
      if (message.document) {
        const { threadId, runId, sender } = await this.processDocument(
          message,
          senderNumber,
        );
        console.log(threadId, runId, sender);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Document processed and sent successfully',
            thread_id: threadId,
            run_id: runId,
            sender_number: sender,
          }),
        };
      } else if (message.audio) {
        const { transcript, sender } = await this.processAudio(
          message,
          senderNumber,
        );
        let threadCreated;
        let threadUpdated;
        const conversationOpened =
          await this.conversationService.findOpenedConversation(user.id);
        if (!conversationOpened) {
          return "você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.";
        }
        /* if(user selecionou uma opção, e no momento só tem a assistant_id, sem a thread criada e salva na sua conversa) */
        if (conversationOpened.assistantId && !conversationOpened.threadId) {
          threadCreated = await this.conversationService.createConversation(
            conversationOpened.assistantId,
            transcript,
          );
          if (threadCreated) {
            await this.replyService.replyMessagePeca(sender);
            threadUpdated =
              await this.conversationService.updateConversationInDb(
                conversationOpened.id,
                threadCreated.thread_id,
              );
          }
          const conversationUpdatedOpened =
            await this.conversationService.findOpenedConversation(user.id);
          const respostaGpt = await this.userService.getMessages(
            conversationUpdatedOpened.threadId,
          );
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
          if (respostaGpt && respostaGpt.data && respostaGpt.data.response) {
            const maxChar = 4096;
            let response = respostaGpt.data.response;

            while (response.length > 0) {
              let part = response.substring(0, maxChar);
              response = response.substring(maxChar);
              await this.replyService.replyAnswerGpt(sender, part);
            }
          }

          return true;
        }

        if (conversationOpened.threadId) {
          let respostaGpt;
          const conversationUpdatedOpened =
            await this.conversationService.findOpenedConversation(user.id);
          await this.replyService.replyMessagePeca(sender);
          const createNewMessageOpenAI =
            await this.conversationService.createNewMessageOpenAI(
              conversationUpdatedOpened.threadId,
              transcript,
            );
          const runThread = await this.conversationService.runThread(
            conversationUpdatedOpened.threadId,
            conversationUpdatedOpened.assistantId,
          );
          respostaGpt = await this.userService.getMessages(
            conversationUpdatedOpened.threadId,
          );
          let tentativa = 0;
          while (!respostaGpt && tentativa < 5) {
            tentativa++;
            respostaGpt = await this.userService.getMessages(
              conversationUpdatedOpened.threadId,
            );
          }
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

            if (respostaGpt && respostaGpt.data && respostaGpt.data.response) {
              const maxChar = 4096;
              let response = respostaGpt.data.response;

              while (response.length > 0) {
                let part = response.substring(0, maxChar);
                response = response.substring(maxChar);
                await this.replyService.replyAnswerGpt(sender, part);
              }
            }
            return true;
          }
        }
      } else if (message.text) {
        const { text, sender } = await this.processText(message, senderNumber);
        if (detectMenu(text)) {
          const openedConversation =
            await this.conversationService.findOpenedConversation(user.id);
          if (openedConversation) {
            const ccvs =
              await this.conversationService.desactiveLastConversation(
                openedConversation.id,
              );
          }
          return this.fluxoService.sendInteractiveMessage(sender);
        }

        let threadCreated;
        let threadUpdated;
        const conversationOpened =
          await this.conversationService.findOpenedConversation(user.id);
        if (!conversationOpened) {
          return "você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.";
        }
        /* if(user selecionou uma opção, e no momento só tem a assistant_id, sem a thread criada e salva na sua conversa) */
        if (conversationOpened.assistantId && !conversationOpened.threadId) {
          threadCreated = await this.conversationService.createConversation(
            conversationOpened.assistantId,
            text,
          );
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
              conversationOpened.assistantId !=
                'asst_PnosQim2RndvcNgW0yQiKx1M' &&
              conversationOpened.assistantId != 'asst_OshFRCvLJUIO7b5nkGodEq7H'
            ) {
              await this.replyService.replyMessagePeca(sender);
            }

            threadUpdated =
              await this.conversationService.updateConversationInDb(
                conversationOpened.id,
                threadCreated.thread_id,
              );
          }
          const conversationUpdatedOpened =
            await this.conversationService.findOpenedConversation(user.id);
          const respostaGpt = await this.userService.getMessages(
            conversationUpdatedOpened.threadId,
          );
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
          // if (respostaGpt && respostaGpt.data && respostaGpt.data.response) {
          //   const maxChar = 4096;
          //   let response = respostaGpt.data.response;

          //   while (response.length > 0) {
          //     let part = response.substring(0, maxChar);
          //     response = response.substring(maxChar);
          //   }

          //   return true
          // }
          await this.replyService.replyAnswerGpt(
            sender,
            respostaGpt.data.response,
          );

          return true;
        }

        if (conversationOpened.threadId) {
          let respostaGpt;
          const conversationUpdatedOpened =
            await this.conversationService.findOpenedConversation(user.id);

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
          const createNewMessageOpenAI =
            await this.conversationService.createNewMessageOpenAI(
              conversationUpdatedOpened.threadId,
              text,
            );
          const runThread = await this.conversationService.runThread(
            conversationUpdatedOpened.threadId,
            conversationUpdatedOpened.assistantId,
          );
          respostaGpt = await this.userService.getMessages(
            conversationUpdatedOpened.threadId,
          );
          let tentativa = 0;
          while (!respostaGpt && tentativa < 5) {
            tentativa++;
            respostaGpt = await this.userService.getMessages(
              conversationUpdatedOpened.threadId,
            );
          }
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

            if (respostaGpt && respostaGpt.data && respostaGpt.data.response) {
              const maxChar = 4096;
              let response = respostaGpt.data.response;

              while (response.length > 0) {
                let part = response.substring(0, maxChar);
                response = response.substring(maxChar);
                await this.replyService.replyAnswerGpt(sender, part);
              }
              return true;
            }
            return true;
          }
        }
      } else if (message.interactive) {
        const menu = message.interactive.list_reply.id;

        return this.fluxoService.sendInteractiveMenu(menu, senderNumber);
      } else {
        throw new Error('Unsupported message type');
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error processing message',
          error: error.message,
        }),
      };
    }
  }
}
