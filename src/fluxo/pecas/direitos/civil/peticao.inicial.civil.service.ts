import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class PeticaoIncialCivilService {
  constructor() {}

  async sendAcaoDeAlimentos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Alimentos.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendAcaoIndenizatoria(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Indenizatória* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendAntecipacaoDeTutela(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Conhecimento com Pedido de Antecipação de Tutela.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendExecPorQuantia(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Execução por Quantia Certa* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendAcaoDeDespejo(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Despejo* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendAcaoDeCobrança(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Cobrança* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendDeclaratoriaInexistenciaDebito(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação Declaratória de Inexistência de Débito com Obrigação por Fazer e Indenização por Danos Morais.* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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

  async sendObrigacaoFazer(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Obrigação de Fazer* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Ação de Petição Inicial* A partir disso, preciso que me *descreva o caso*, incluindo em sua descrição as informações que detalham de *forma precisa* o ocorrido, como a *qualificação das partes e os fatos*, para que eu possa entender melhor o seu caso e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
