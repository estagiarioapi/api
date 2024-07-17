import { Injectable } from '@nestjs/common';
import { wppApi } from 'src/lib/axios';

@Injectable()
export class EventService {
  async sendMessageTemplate(phoneNumber: string, modelName: string) {
    const template = {
      language: {
        code: 'pt_BR',
      },
      name: modelName,
    };

    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      template: template,
      type: 'template',
      to: phoneNumber,
    };

    await wppApi
      .post('/messages', payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
}
