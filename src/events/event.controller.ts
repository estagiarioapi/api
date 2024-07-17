import { Body, Controller, Post } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly service: EventService) {}

  @Post('sendMessageTemplate')
  async sendMessageTemplate(
    @Body()
    { phoneNumber, modelName }: { phoneNumber: string; modelName: string },
  ) {
    return this.service.sendMessageTemplate(phoneNumber, modelName);
  }
}
