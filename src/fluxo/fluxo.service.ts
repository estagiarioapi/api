import { Injectable } from '@nestjs/common';

@Injectable()
export class FluxoService {
  async sendInteractiveMessage(phoneNumber: string) {
    return {
      recipient_type: 'individual',
      to: phoneNumber,
      type: 'interactive',
      interactive: {
        type: 'list',
        header: {
          type: 'text',
          text: 'Funcionalidades',
        },
        body: {
          text: 'your-text-message-content',
        },
        footer: {
          text: 'your-footer-content',
        },
        action: {
          button: 'cta-button-content',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '1',
                  title: 'Auxiliar Jurídico',
                  description: 'row-description-content',
                },
                {
                  id: '2',
                  title: 'Notif. Extrajudicial',
                  description: 'row-description-content',
                },
                {
                  id: '3',
                  title: 'Peças Processuais',
                  description: 'row-description-content',
                },
                {
                  id: '4',
                  title: 'Contratos',
                  description: 'row-description-content',
                },
              ],
            },
          ],
        },
      },
    };
  }
}
