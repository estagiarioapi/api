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
      Authorization: process.env.ACCESS_TOKEN,
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
      Authorization: process.env.ACCESS_TOKEN,
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
      Authorization: process.env.ACCESS_TOKEN,
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
      Authorization: process.env.ACCESS_TOKEN,
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
      Authorization: process.env.ACCESS_TOKEN,
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
      Authorization: process.env.ACCESS_TOKEN,
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

  async replyDocumentoRecebido(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '📄 Pronto, Chefe! Agora pode me fazer questionamentos a respeito das informações contidas no arquivo.',
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

  async replyInputDocumentoRecebido(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: '✍️ Entendido. Já estou gerando sua resposta, chefe! | Tempo médio de resposta: 30 segundos',
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

  async replyLead(phoneNumber: string, waitListNumber: number) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Olá, chefe! Prazer, sou o *EstagIArio*, seu novo assistente jurídico! 🧑‍⚖️',
      },
      {
        text: 'Você está na *lista de espera*, o que significa que está a um passo de ter o *assistente jurídico* mais eficiente do mercado, dedicado ao seu dia a dia',
      },
      {
        text: `➡️ Sua posição atual é *n.º ${waitListNumber}*`,
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
  }

  async replyLeadOption(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
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
          text: 'Devido ao grande número de inscritos na nossa lista de espera, os acessos ao período de teste gratuito estão sendo liberados gradualmente. Contudo, preparamos algo especial para você, por ser um pioneiro dessa revolução jurídica. Quer conferir, chefe? ',
        },
        action: {
          buttons: [
            {
              type: 'reply',
              reply: {
                id: '1022',
                title: 'Sim',
              },
            },
            {
              type: 'reply',
              reply: {
                id: '1023',
                title: 'Não',
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

  async replyLeadOptionYes(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: 'Estaremos liberando três convites que você poderá enviar para colegas (profissionais jurídicos), possibilitando adiantar sua posição na fila a cada novo cadastro pelo seu link. \nSegue abaixo o link com seu convite. Estaremos te atualizando sobre o seu avanço na fila de espera \n*Obrigado desde já! Seja bem vindo ao futuro da advocacia. \nEssa promoção possui validade de 48 horas.*',
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

  async replyLeadOptionNo(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };
    const messagePayload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'text',
      text: {
        body: 'Ok! Assim que chegar sua posição na fila, enviaremos uma mensagem te informando. Obrigado desde já!',
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
