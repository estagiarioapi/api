import { Body, Controller, Post } from '@nestjs/common';
import { Logger } from 'src/core/utils/logger';
import { EventService } from './event.service';

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

  @Post('sendTimeoutMessage')
  async sendTimeoutMessage(@Body() phoneNumber: string) {
    return this.service.sendTimeoutMessage(phoneNumber);
  }
}
