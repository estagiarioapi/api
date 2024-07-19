import { Module } from '@nestjs/common';
import { UserService } from '../core/integrations/user.service';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  controllers: [EventController],
  providers: [EventService, UserService],
})
export class EventModule {}
