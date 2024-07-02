import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class PeticaoIntermediariaAdministrativoService {
  constructor() { }

  async sendContestacao(phoneNumber: string) {
    const assistant_id = 'asst_K1ZLYnDhJxuJE6Kx6lPhsuDx'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contestação* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }

  async sendImpugnacaoContestacao(phoneNumber: string) {
    const assistant_id = 'asst_FIxEWSgpCUN6LWxUh9hm6aeR'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Impugnação à Contestação* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }

  async sendContraEmbargosDeclaracao(phoneNumber: string) {
    const assistant_id = 'asst_ueXymFx31iRvRsbq7aHyAdX6'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrarrazões aos Embargos de Declaração* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }

  async sendContraApelacao(phoneNumber: string) {
    const assistant_id = 'asst_XaPo1DVrHepJb2ZwpNDhlEH2'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrarrazões à Apelação* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }

  async sendContraAgravoInstrumento(phoneNumber: string) {
    const assistant_id = 'asst_Q71pg1BxJo3h1KhNMpSvpg3b'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrarrazões aos Embargos de Declaração.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }

  async sendAlegacoesFinais(phoneNumber: string) {
    const assistant_id = 'asst_HyFedaXSIPVqv33DKQ6Rb6oA'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Alegações Finais* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

    return true;
  }
}
