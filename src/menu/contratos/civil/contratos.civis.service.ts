import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from '../../../core/integrations/conversation.service';
import { UserService } from '../../../core/integrations/user.service';

const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ContratosCivisService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}

  async sendCompraEVenda(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_etxHCk9nHcPrdWpyFn7HsI4N';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Compra e Venda*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os bens exatos que estão sendo vendidos?\n2. Quais são os termos de pagamento, incluindo o preço, forma de pagamento e eventuais penalidades por atraso?\n3. Existem garantias ou condições específicas relativas à qualidade ou entrega dos bens?',
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
  async sendPrestacaoServicos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_UuAFNNYybmrAhVVFjoV9sZlF';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Prestação de Serviços*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é o escopo exato dos serviços a serem prestados?\n2. Como será feita a remuneração e quais são os termos de pagamento?\n3. Existem cláusulas de confidencialidade ou exclusividade?',
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
  async sendEmpreitada(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_UvWfEqs5Xf0D1L5j3yOn3C6E';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Empreitada*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os detalhes específicos do projeto ou obra a ser realizada?\n2. Como será estruturado o pagamento (por exemplo, pagamento por etapas, à vista, após a conclusão)?\n3. Como serão resolvidos possíveis conflitos ou atrasos na entrega do projeto?',
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
  async sendDistrato(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_osIV8UVg1F4AfrPvmxPjKKSt';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Distrato*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as condições originais do contrato que estão sendo rescindidas?\n2. Existem penalidades ou obrigações financeiras associadas ao distrato?\n3. Como será o processo de finalização e quais são os prazos para cumprimento das obrigações remanescentes após o distrato?',
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
  async sendComodato(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_xB8wVqSuKWFM3dwqnohyGpnL';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Comodato*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do bem emprestado (natureza, características)?\n2. Qual é o prazo de duração do empréstimo e as condições de devolução do bem?\n3. Quais são as responsabilidades do comodatário em relação à conservação e uso do bem?',
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
  async sendDeposito(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_AdbHdgomEkq95nyLd5yPsayP';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Depósito*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do bem a ser depositado (natureza, valor, características)?\n2. Qual é o prazo de duração do depósito e as condições para retirada do bem?\n3. Quais são as responsabilidades do depositário em relação à guarda e conservação do bem?',
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
  async sendDoacao(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_1oSRbpqhHAu6xbSeoIGA9IiQ';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Doação*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do bem a ser doado (natureza, valor, características)?\n2. Se houver, quais são as condições e encargos associados à doação?\n3. Quais são os direitos e responsabilidades do doador e do donatário?',
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
