import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from '../../../core/integrations/conversation.service';
import { UserService } from '../../../core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ContratosCulturaisService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}

  async sendPatrocinioCultural(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_YqAS9cbNTucLmpVDEIrUCd43';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Patrocinio Cultural*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do projeto cultural a ser patrocinado (natureza, objetivos, duração)?\n2. Qual é o valor do patrocínio e as condições de pagamento (parcelas, cronograma)?\n3. Quais são as contrapartidas oferecidas ao patrocinador (visibilidade, publicidade, benefícios)?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendParceriaCultural(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_WC3s6HP5XsMUtGQHhUN2JNJD';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Parceria Cultural*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as responsabilidades e contribuições de cada parceiro no projeto cultural?\n2. Qual é o cronograma de atividades e a duração da parceria?\n3. Quais são as condições para a rescisão da parceria e a divisão de resultados?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendCoProducaoDeEventos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_ryl3p0iugtmREL07EgSggL0d';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Co-produção de Eventos*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do evento a ser co-produzido (natureza, local, data)?\n2. Quais são as responsabilidades e contribuições de cada co-produtor?\n3. Qual é a forma de divisão dos lucros e das despesas do evento?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendCessaoDireitosAutorais(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_M7Aw75sSm7XC1iOW4YnY1gYz';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Cessão de Direitos Autorais*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as obras ou direitos autorais a serem cedidos (descrição detalhada, abrangência)?\n2. Qual é a duração e a extensão territorial da cessão dos direitos?\n3. Qual é a remuneração pela cessão dos direitos autorais e as condições de pagamento?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendServicosArtisticos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_m9lPMoZzx40gjl41AmsFKLIT';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Prestação de Serviços Artísticos*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os serviços artísticos a serem prestados (descrição detalhada, natureza)?\n2. Qual é a duração dos serviços e as condições de pagamento?\n3. Quais são as responsabilidades do artista e as condições para a rescisão do contrato?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendRealizaoDeShow(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_EOI18sTeQPqn6J4mRAiySBMo';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Realização de Show*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do show ou espetáculo (natureza, local, data, duração)?\n2. Qual é o valor do cachê e as condições de pagamento ao artista?\n3. Quais são as responsabilidades do produtor e do artista em relação à organização e realização do evento?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendDistribuicaoDeObras(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_Y6W3bxRVlHyVvy7ZGr4JcUxv';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Distribuição de Obras*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as obras a serem distribuídas (descrição detalhada, formato, quantidade)?\n2. Qual é a área de distribuição e a duração do contrato?\n3. Qual é a forma de remuneração do distribuidor e as condições de pagamento?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
  async sendAgenciamentoFisico(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_k6Osw0BaWiXJPpHBSiFZr9o8';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Agenciamento Físico*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os serviços de agenciamento a serem prestados (descrição detalhada, abrangência)?\n2. Qual é a duração do contrato de agenciamento e as condições para rescisão?\n3. Qual é a forma de remuneração do agente artístico e as condições de pagamento?',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
      {
        text: 'Ou, se desejar retornar ao menu com todas as funcionalidades, envie “menu”.',
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
