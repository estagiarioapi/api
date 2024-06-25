import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FluxoService {
  constructor() {}

  async sendInteractiveMessage(phoneNumber) {
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
      const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';
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
}
