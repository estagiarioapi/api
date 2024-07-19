import { Injectable } from '@nestjs/common';
import { Logger } from 'src/core/utils/logger';
import { wppApi } from 'src/lib/axios';

@Injectable()
export class EventService {
  @Logger()
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

    console.log('Sending message template...', payload);

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
