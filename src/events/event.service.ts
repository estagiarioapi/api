import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserService } from 'src/core/integrations/user.service';
import { Logger } from 'src/core/utils/logger';
import { wppApi } from 'src/lib/axios';
import { ConversationService } from '../core/integrations/conversation.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class EventService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}
  @Logger()
  async sendMessageTemplate(
    phoneNumber: string,
    modelName: string,
    parameters?: any,
  ) {
    const template = {
      language: {
        code: 'pt_BR',
      },
      name: modelName,
    };

    if (parameters) {
      template['components'] = Array.isArray(parameters)
        ? parameters
        : [parameters];
    }

    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      template: template,
      type: 'template',
      to: phoneNumber,
    };

    console.log('Sending message template...', payload);

    await wppApi
      .post('/messages', payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  async sendTimeoutMessage(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    console.log(phoneNumber);
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    const openedConversation =
      await this.conversationService.findOpenedConversation(user.id);
    if (openedConversation) {
      const ccvs = await this.conversationService.desactiveLastConversation(
        openedConversation.id,
      );
    }
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: {
          text: 'Chefe, por falta de interação, estou encerrando a nossa conversa aqui. Caso queira que eu realize outra tarefa, basta clicar no botão abaixo. 😉',
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: '1021',
                title: 'Voltar ao menu',
              },
            },
          ],
        },
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
}
