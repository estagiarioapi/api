import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ReplyService {
  async replyMessagePeca(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '📝 Compreendido, chefe! Já estou redigindo a sua peça… | Tempo médio de resposta: 30 segundos',
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }

  async replyMessageContrato(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '📄 Excelente, chefe! Já estou formulando o seu contrato… | Tempo médio de resposta: 30 segundos',
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }

  async replyMessageNotificacao(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '📨 Perfeito, chefe! Já estou produzindo a sua notificação extrajudicial. | Tempo médio de resposta: 30 segundos',
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }

  async replyMessageAuxiliar(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '🧑‍⚖️ Entendido. Já estou preparando a resposta, chefe! | Tempo médio de resposta: 30 segundos',
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }

  async replyAnswerGpt(phoneNumber: string, text: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: text,
      },
    };

    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }

  async replyAfterAnswerPeca(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
          text: 'Feito, chefe! Caso esteja satisfeito com a sua peça e deseje retornar ao menu com todas as funcionalidades, ou queira realizar alguma alteração em sua petição, basta selecionar a opção desejada abaixo. ⬇️ ',
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: '1020',
                title: 'Quero editar',
              },
            },
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

    return true;
  }

  async replyAfterAnswerContrato(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
          text: 'Feito, chefe! Caso esteja satisfeito com o seu contrato e deseje retornar ao menu com todas as funcionalidades, ou queira realizar alguma alteração em seu documento, basta selecionar a opção desejada abaixo. ⬇️  ',
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: '1020',
                title: 'Quero editar',
              },
            },
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

    return true;
  }

  async replyAfterAnswerNotificacao(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
          text: 'Feito, chefe! Caso esteja satisfeito com a sua notificação extrajudicial e deseje retornar ao menu com todas as funcionalidades, ou queira realizar alguma alteração em seu documento, basta selecionar a opção desejada abaixo. ⬇️ ',
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: '1020',
                title: 'Quero editar',
              },
            },
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

    return true;
  }

  async replyAfterEditOptionSelected(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '👍 Entendido, chefe! O que gostaria que eu editasse, aprimorasse ou corrigisse na peça? \n Indique a alteração em uma única mensagem.',
      },
    };
    try {
      const response = await axios.post(url, messagePayload, { headers });
      if (response.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }

    return true;
  }
}
