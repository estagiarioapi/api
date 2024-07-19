import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from '../../../core/integrations/conversation.service';
import { UserService } from '../../../core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ContratosImobiliariosService {
  constructor(
    private userService: UserService,
    private conversationService: ConversationService,
  ) {}

  async sendCompraVendaImóvel(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_ERdv7VDrGiO5aFNUa31HCXDl';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Compra e Venda de Imóvel*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do imóvel sendo vendido, incluindo sua localização, características físicas?\n2. Quais são os termos de pagamento para a compra do imóvel, incluindo o preço  total, formas de pagamento aceitáveis, cronograma de pagamentos e as consequências para o caso de inadimplência do comprador?\n3. O vendedor oferece garantias específicas quanto à situação jurídica do imóvel, como a ausência de pendências legais ou débitos anteriores, e quais são as obrigações do vendedor e do comprador com relação à transferência da propriedade e registro do imóvel?',
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
  async sendLocação(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_3hC4OwOY6YzeKVVaS8grevTX';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Locação*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a duração do contrato de locação e existem condições para renovação?\n2. Quais são as obrigações do locatário e do locador quanto a manutenção e reparos?\n3. Como e quando o aluguel será ajustado?',
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
  async sendFinanciamentoImob(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_SLcqbgHJSVzrIOJxs0rAOC9i';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Financiamento Imobiliário*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição completa do imóvel objeto do financiamento, incluindo localização, características físicas, estado de conservação e qualquer ônus ou direitos reais que incidam sobre ele?\n2. Quais são os termos do financiamento, como o montante total financiado, taxas de juros aplicáveis, prazo de pagamento, cronograma de amortizações e as consequências para o caso de inadimplência?\n3. Existem condições específicas relacionadas à contratação do seguro obrigatório do imóvel e ao uso ou modificação do imóvel durante o período de financiamento? Quais são as obrigações do financiador e do financiado em caso de sinistro ou danos ao imóvel?',
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
  async sendCorretagemImob(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_fgmC77heRQKAl9jGqM02sbis';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Corretagem Imobiliária*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição completa do imóvel que será objeto da corretagem, incluindo localização, características físicas e especificações que possam influenciar na venda ou locação?\n2. Quais são os termos do serviço de corretagem, incluindo a duração do contrato, a remuneração do corretor (comissão), condições de pagamento dessa comissão e as obrigações do corretor em relação à promoção e intermediação da transação?\n3. Existem cláusulas específicas sobre a exclusividade da corretagem? Quais são as consequências de uma venda direta pelo proprietário ou através de outro corretor durante o período de exclusividade?',
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
  async sendBuiltToSuit(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_2C1GjP7zX1mnHY9V6UGQDL92';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato Built to Suit*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do imóvel a ser construído ou adaptado conforme as necessidades do locatário, incluindo a localização, especificações técnicas e características arquitetônicas esperadas?\n2. Quais são os termos de locação do imóvel, incluindo o prazo do contrato, valor do aluguel, ajustes periódicos, obrigações financeiras adicionais (como taxas de manutenção ou seguro), e as consequências em caso de descumprimento contratual por qualquer das partes?\n3. Quais são as responsabilidades específicas do locador no que se refere à construção ou adaptação do imóvel? Como serão gerenciadas as aprovações de projetos, supervisão da obra e garantias de qualidade e de cumprimento dos prazos acordados?',
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
  async sendCessaoDireitoPossesorio(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_MxGIUM4co90MIEYFUfshcQ4D';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Cessão de Direitos Possessórios*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do imóvel objeto da cessão, incluindo localização, características físicas, situação de  ocupação e quaisquer ônus ou direitos reais que incidam sobre ele?\n2. Quais são os termos da cessão, incluindo o valor acordado para a transferência dos direitos possessórios, formas de pagamento, cronograma de pagamentos e as consequências em caso de inadimplência de qualquer das partes?\n3. Quais são as obrigações do cedente em garantir a legitimidade dos direitos possessórios e quais são as condições e restrições impostas ao cessionário em relação ao uso e melhorias no imóvel após a cessão?',
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
  async sendPermutaImoveis(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_Hz2LNE7lWj0xpqWGrfZ6SuRH';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Permuta de Imóveis*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada dos imóveis envolvidos na permuta, incluindo localização, características físicas, quaisquer ônus ou direitos reais que incidam sobre eles e a valoração de cada imóvel?\n2. Quais são os termos da permuta, incluindo as obrigações de cada parte em relação à transferência dos títulos, eventuais compensações financeiras se os valores dos imóveis não forem equivalentes e o cronograma para a efetivação da troca?\n3. Existem condições ou cláusulas específicas sobre a posse, uso ou modificações dos imóveis após a permuta? Quais são as garantias oferecidas por cada parte quanto à situação jurídica e física dos imóveis trocados?',
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
  async sendComodatoImovel(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_1j0RiEu9x8WPKi98a73varQa';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Comodato de Imóvel*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada do imóvel cedido em comodato (localização, área, características)?\n2. Qual é o prazo de duração do comodato e as condições para a devolução do imóvel?\n3. Quais são as responsabilidades do comodatário em relação à conservação e manutenção do imóvel?',
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
