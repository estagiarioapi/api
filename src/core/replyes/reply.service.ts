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
}
