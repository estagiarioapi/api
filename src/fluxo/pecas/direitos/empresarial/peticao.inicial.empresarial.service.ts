import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class PeticaoInicialEmpresarialService {
  constructor() { }

  async sendExecPorQuantiaCerta(phoneNumber: string) {
    const assistant_id = 'asst_X9wln1pRH5wVKBPBbBP1FFhk'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Execução Por Quantia Certa.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendDissolucaoParcial(phoneNumber: string) {
    const assistant_id = 'asst_nnY7Sr9D0U9K4AEyoOGXm6zj'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Dissolução Parcial.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendAcaoRenovatoria(phoneNumber: string) {
    const assistant_id = 'asst_7r8mpXrqK5AznoWHpSudfayQ'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação Renovatória.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendResolucaoDeSociedade(phoneNumber: string) {
    const assistant_id = 'asst_NRzLFvH7bOopRUKG3oGSmqt7'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Resolução de Sociedade.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendAcaoMonitoria(phoneNumber: string) {
    const assistant_id = 'asst_AwTjto0Cw6W8bBzy5Gv34eRZ'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação Monitória.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendObrigacaoDeNaoFazer(phoneNumber: string) {
    const assistant_id = 'asst_EDOaTLH6HFRdpgbvNJo0zasx'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Obrigação de Não Fazer.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendPeticaoInicial(phoneNumber: string) {
    const assistant_id = 'asst_Ck9AMw3SLeV43HidGjvhfxfr'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Petição Inicial de Cancelamento de Protesto.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendAcaoRestituicao(phoneNumber: string) {
    const assistant_id = 'asst_vUO7pHFxKhHZYYnq5syTIvou'
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Restituição.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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

  async sendAcaoRevocatoria(phoneNumber: string) {
    const assistant_id = ''
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação Revocatória.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
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
