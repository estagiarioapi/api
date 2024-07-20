import { Injectable } from '@nestjs/common';
import { Logger } from 'src/core/utils/logger';
import { UserService } from 'src/core/integrations/user.service';
import { wppApi } from 'src/lib/axios';

@Injectable()
export class EventService {
  constructor(private userService: UserService) {}
  @Logger()
  async sendMessageTemplate(
    phoneNumber: string,
    modelName: string,
    parameters?: any,
  ) {
    const template = {
      language: {
        code: 'pt_BR',
      },
      name: modelName,
    };

    if (parameters) {
      template['components'] = Array.isArray(parameters)
        ? parameters
        : [parameters];
    }

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
