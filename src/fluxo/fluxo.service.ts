import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { FluxoPecaService } from './pecas/fluxo.peca.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';
@Injectable()
export class FluxoService {
  constructor(private fluxoPecaService: FluxoPecaService) {}

  async sendInteractiveMessage(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Olá chefe, como posso te ajudar?',
        },
        action: {
          button: 'Funcionalidades',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '1',
                  title: 'Auxiliar Jurídico',
                },
                {
                  id: '2',
                  title: 'Notif. Extrajudicial',
                },
                {
                  id: '3',
                  title: 'Peças Processuais',
                },
                {
                  id: '4',
                  title: 'Contratos',
                },
              ],
            },
          ],
        },
      },
    };

    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBO2khquDWAFbZAx7cwKGPbK96IlVIPFIUQXPvFNdwL9gIclSAzcyBcB0bxMtp0s1UWRTLtp1oxPSZAB7knwgKUVc2TSUVNMkGgwQrewZAYZAzdpq9bHrbcFHUZCNg9UR82oqNBNQYx5G20PHSWNA1LIQVLcECtYXgO100IQJsg96KA3tVnGepbH4HMYNc7uAgCqsrDI7wZD',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendInteractiveMenu(menuId: string, phoneNumber: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '1') {
      return this.sendAuxiliarJuridicoMenu(phoneNumber);
    } else if (menuId === '2') {
      return this.sendNotificacaoExtrajudicialMenu(phoneNumber);
    } else if (menuId === '3') {
      return this.sendPecasProcessuaisMenu(phoneNumber);
    } else if (menuId === '4') {
      return this.sendContratosMenu(phoneNumber);
    } else if (['5', '6', '7', '8', '9', '10', '11', '12'].includes(menuId)) {
      return this.sendPecasProcessuaisDireitosMenu(phoneNumber, menuId);
    }
  }
  async sendAuxiliarJuridicoMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Você selecionou a funcionalidade de *Auxiliar Jurídico.* Nessa função, você poderá enviar suas dúvidas para que eu possa responder. Também ofereço suporte direcionado às suas necessidades legais, isso inclui esclarecimentos sobre legislação, interpretações jurídicas e orientações sobre como proceder diante de um caso, ao me enviar o fato, visando facilitar suas decisões e ações legais. 👨‍⚖️',
      },
      {
        text: '*Chefe, especificamente nessa função, quando estiver satisfeito com o auxílio jurídico fornecido, basta me enviar a palavra "Menu" no chat para retornar ao Menu Principal e acessar as outras funcionalidades.*',
      },
      {
        text: '*Envie seu questionamento em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO2khquDWAFbZAx7cwKGPbK96IlVIPFIUQXPvFNdwL9gIclSAzcyBcB0bxMtp0s1UWRTLtp1oxPSZAB7knwgKUVc2TSUVNMkGgwQrewZAYZAzdpq9bHrbcFHUZCNg9UR82oqNBNQYx5G20PHSWNA1LIQVLcECtYXgO100IQJsg96KA3tVnGepbH4HMYNc7uAgCqsrDI7wZD',
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
  async sendNotificacaoExtrajudicialMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionada *Notificação Extrajudicial.* A partir disso, preciso que me *descreva o caso*, detalhando de *forma precisa* o ocorrido, para que eu possa entender melhor a situação e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];

    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBO2khquDWAFbZAx7cwKGPbK96IlVIPFIUQXPvFNdwL9gIclSAzcyBcB0bxMtp0s1UWRTLtp1oxPSZAB7knwgKUVc2TSUVNMkGgwQrewZAYZAzdpq9bHrbcFHUZCNg9UR82oqNBNQYx5G20PHSWNA1LIQVLcECtYXgO100IQJsg96KA3tVnGepbH4HMYNc7uAgCqsrDI7wZD',
      'Content-Type': 'application/json',
    };

    for (const message of messages) {
      const messagePayload = {
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
  async sendPecasProcessuaisMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou a funcionalidade de *Peças processuais.* Agora escolha o tipo direito inserido na peça que você quer redigir.',
        },
        action: {
          button: 'Escolha o direito',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '5',
                  title: 'Direito Civil',
                },
                {
                  id: '6',
                  title: 'Direito Empresarial',
                },
                {
                  id: '7',
                  title: 'Direito Penal',
                },
                {
                  id: '8',
                  title: 'Dir. Constitucional',
                },
                {
                  id: '9',
                  title: 'Dir. do Trabalho',
                },
                {
                  id: '10',
                  title: 'Direito Tributário',
                },
                {
                  id: '11',
                  title: 'Dir. Administrativo',
                },
                {
                  id: '12',
                  title: 'Dir. Previdenciário',
                },
              ],
            },
          ],
        },
      },
    };

    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBO2khquDWAFbZAx7cwKGPbK96IlVIPFIUQXPvFNdwL9gIclSAzcyBcB0bxMtp0s1UWRTLtp1oxPSZAB7knwgKUVc2TSUVNMkGgwQrewZAYZAzdpq9bHrbcFHUZCNg9UR82oqNBNQYx5G20PHSWNA1LIQVLcECtYXgO100IQJsg96KA3tVnGepbH4HMYNc7uAgCqsrDI7wZD',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendPecasProcessuaisDireitosMenu(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '5') {
      return this.fluxoPecaService.sendPecaDireitoCivil(phoneNumber);
    } else if (menuId === '6') {
      return this.fluxoPecaService.sendPecaDireitoEmpresarial(phoneNumber);
    } else if (menuId === '7') {
      return this.fluxoPecaService.sendPecaDireitoPenal(phoneNumber);
    } else if (menuId === '8') {
      return this.fluxoPecaService.sendPecaDireitoConstitucional(phoneNumber);
    } else if (menuId === '9') {
      return this.fluxoPecaService.sendPecaDireitoDoTrabalho(phoneNumber);
    } else if (menuId === '10') {
      return this.fluxoPecaService.sendPecaDireitoTributario(phoneNumber);
    } else if (menuId === '11') {
      return this.fluxoPecaService.sendPecaDireitoAdministrativo(phoneNumber);
    } else if (menuId === '12') {
      return this.fluxoPecaService.sendPecaDireitoPrevidenciario(phoneNumber);
    }
  }

  async sendContratosMenu(senderNumber: string) {}
}
