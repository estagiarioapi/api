import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from 'src/core/integrations/conversation.service';
import { UserService } from 'src/core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class RecursosTrabalhoService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}

  async sendRecursoOrdinario(phoneNumber: string) {
    const assistant_id = 'asst_d4IchPyIPV0Eh7DvbL795ySv';
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Recurso Ordinário.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }

  async sendAgravoPeticao(phoneNumber: string) {
    const assistant_id = 'asst_DVwYHzsATao06vfXrJwZuRpE';
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Agravo de Petição.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }

  async sendAgravoDeInstrumento(phoneNumber: string) {
    const assistant_id = 'asst_Egodzt3U6BZPFjRdxBE39MHu';
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Agravo de Instrumento.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }

  async sendRecursoRevista(phoneNumber: string) {
    const assistant_id = 'asst_e0FazXdexIhR9M8TeFnNWwtJ';
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Recurso de Revista.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }
}
