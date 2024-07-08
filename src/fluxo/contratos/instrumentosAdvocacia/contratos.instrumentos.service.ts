import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserService } from '../../../core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class ContratosInstrumentosAdvocaticiosService {
  constructor(private userService: UserService) {}

  async sendPropostaServicos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_IXxKqy6OhBidZWrJDDQ3nQcx';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Proposta de Serviços Advocatícios*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada dos serviços advocatícios a serem prestados (natureza, complexidade, abrangência)? 2. Qual é o valor dos honorários propostos e as condições de pagamento (à vista, parcelado, porcentagem pelo êxito)? 3. Quais são as responsabilidades do cliente e as garantias oferecidas em relação ao pagamento dos honorários?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
  async sendProcuracao(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_fplN3Q40gq0ptGzSHtw7dIT9';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Contrato de Procuração*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é o objeto da procuração e os poderes conferidos ao procurador (representação em juízo, administração de bens)? 2. Qual é o prazo de validade da procuração e as condições para sua revogação? 3. Quais são os deveres do procurador e as responsabilidades do outorgante em relação aos atos praticados?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
  async sendDeclaracaoHipossuficiencia(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_PMV25oPX1rvGEOO2nmcC5lHT';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Declaração de Hipossuficiência*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a situação financeira do declarante e os motivos que justificam a hipossuficiência? 2. Quais são os documentos comprobatórios da hipossuficiência apresentados? 3. Quais são as responsabilidades do declarante em relação à veracidade das informações prestadas?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
  async sendHonorarios(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_cw4CCrkhdYZ33flf6Z7GeG0j';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Honorários*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é a descrição detalhada dos serviços advocatícios a serem prestados (natureza, complexidade, abrangência)? 2. Qual é o valor dos honorários propostos e as condições de pagamento (à vista, parcelado, porcentagem pelo êxito)? 3. Quais são as responsabilidades do cliente e as garantias oferecidas em relação ao pagamento dos honorários?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
  async sendParceriaEscritorios(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_4FKLgn6cqZkA8RA0nI5JCKTc';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Parceria Entre Escritórios*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Quais são os objetivos e as responsabilidades de cada escritório na parceria (divisão de tarefas, compartilhamento de recursos)? 2. Qual é o prazo de duração da parceria e as condições para sua rescisão? 3. Como serão divididos os honorários e as responsabilidades em relação aos clientes em comum?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
  async sendTermoConfissaoDeDivida(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_HG9h1PX3TQXO59r97zGWY47o';
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }

    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionado *Termo de Confissão de Dívida*. A partir disso, irei te fazer três perguntas para que eu possa entender melhor o seu caso e atender o seu pedido da melhor maneira',
      },
      {
        text: '1. Qual é o valor da dívida confessada e a causa da obrigação? 2. Quais são as condições de pagamento acordadas entre as partes (parcelas, prazo)? 3. Quais são as consequências em caso de inadimplência e as garantias oferecidas para o pagamento da dívida?',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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
