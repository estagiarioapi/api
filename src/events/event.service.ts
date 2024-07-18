import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/core/integrations/user.service';
import { wppApi } from 'src/lib/axios';

@Injectable()
export class EventService {
  constructor(private userService: UserService) { }
  async sendMessageTemplate(phoneNumber: string, modelName: string) {
    const lead = await this.userService.getLead(phoneNumber)
    if (!lead) {
      throw new BadRequestException('lead not found')
    }
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
