import { Global, Module } from '@nestjs/common';
import { WhatsappService } from './integrations/whatsapp/whatsapp.service';
import { ReplyService } from './replyes/reply.service';
import { ConversationService } from './integrations/conversation.service';
import { UserService } from './integrations/user.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [ConversationService, WhatsappService, ReplyService, UserService],
  exports: [ConversationService, WhatsappService, ReplyService, UserService],
})
export class CoreModule {}
