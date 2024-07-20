import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import { Logger } from 'src/core/utils/logger';
import { EventService } from './event.service';

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

  @Post('sendTimeoutMessage/:phoneNumber')
  async sendTimeoutMessage(@Param('phoneNumber') phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o número do usuário');
    }
    return await this.service.sendTimeoutMessage(phoneNumber);
  }
}
