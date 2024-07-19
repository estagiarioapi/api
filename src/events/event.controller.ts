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
    { phoneNumber, modelName }: { phoneNumber: string; modelName: string },
  ) {
    return this.service.sendMessageTemplate(phoneNumber, modelName);
  }
}
