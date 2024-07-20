import { Body, Controller, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { Logger } from 'src/core/utils/logger';

@Controller('event')
export class EventController {
  constructor(private readonly service: EventService) {}

  @Post('sendMessageTemplate')
  @Logger()
  async sendMessageTemplate(
    @Body()
    {
      phoneNumber,
      modelName,
      parameters,
    }: {
      phoneNumber: string;
      modelName: string;
      parameters: any;
    },
  ) {
    return this.service.sendMessageTemplate(phoneNumber, modelName, parameters);
  }
}
