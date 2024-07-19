import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from '../../../core/integrations/conversation.service';
import { UserService } from '../../../core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ContratosEmpresariaisService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}

  async sendSociedade(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_q32pzxH7HWQIWqikE2zrNVEU';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Sociedade*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as contribuições de capital ou outros recursos que cada sócio trará para a sociedade?\n2. Como serão distribuídos os lucros e geridos os prejuízos?\n3. Qual é o processo para a entrada de novos sócios ou saída de sócios existentes?',
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
  async sendFranquia(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_cYqft3F0LpRyL5O0bt4JXlnQ';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Franquia*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as obrigações e direitos do franqueador e do franqueado?\n2. Existe uma taxa inicial ou royalties contínuos a serem pagos?\n3. Como é tratada a questão da exclusividade territorial?',
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
  async sendFornecimento(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_D4rpKKrdiPx8S0ZGUUxw5pUd';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Fornecimento*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a quantidade e frequência de entrega dos produtos ou serviços?\n2. Existem cláusulas de ajuste de preço ou indexação?\n3. Como será tratado o não cumprimento das obrigações contratuais?',
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
  async sendDistribuicao(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_ppRjaaJC1LYaOwpOE5lpeuV0';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Distribuição*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são as metas de vendas e os territórios cobertos pelo contrato?\n2. Como será tratada a exclusividade de distribuição?\n3. Existem requisitos específicos para promoção e marketing dos produtos?',
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
  async sendLicencaMarcaPatente(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_qfYcSX5bZCn1A7BjBohnYgr2';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Licença de Uso de Marca ou Patente*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é o escopo da licença (quais produtos ou serviços estão incluídos)?\n2. Existem restrições geográficas ou de mercado para o uso da marca ou patente?\n3. Como e quando serão realizados os pagamentos dos royalties?',
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
  async sendAcordoAcionista(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_GgJG1x1btieUeKj5g5z1F4Ty';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Acordo de Acionistas*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os direitos e deveres dos acionistas?\n2. Como serão resolvidas as disputas entre os acionistas?\n3. Quais são as cláusulas para entrada e saída de acionistas?',
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
  async sendParceria(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_7UkjQypTHPBgz2Iu5kSIpwMh';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Parceria*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é o objetivo específico da parceria e o período de duração do contrato?\n2. Como serão partilhados os resultados financeiros ou outros benefícios da parceria?\n3. Quais são as responsabilidades e obrigações de cada parceiro?',
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
  async sendFactoring(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_U9Xatm1sMwV1IiZiE50MhyQn';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Factoring*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os termos para a transferência de recebíveis?\n2. Como será calculada a taxa de desconto ou os juros aplicados?\n3. Existem condições especiais para casos de inadimplência dos devedores originais?',
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
  async sendContratoSocial(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_bDkYfcdHJKIKtJyT9U8WmCT1';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato Social*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os detalhes da empresa e dos sócios (razão social, CNPJ, endereço, dados dos sócios)?\n2.Qual é o objeto social da empresa e como será sua administração (atividades, forma de administração, representação perante terceiros)?\n3.Como serão divididos os direitos e deveres dos sócios (capital social, distribuição de lucros, resolução de conflitos, alterações contratuais)?',
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
