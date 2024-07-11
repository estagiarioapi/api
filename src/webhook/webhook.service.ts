import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { promises as fs } from 'fs';
import { UserService } from '../core/integrations/user.service';
import { MenuService } from 'src/menu/menu.service';
import { ThreadService } from 'src/thread/thread.service';
import { ConversationService } from 'src/core/integrations/conversation.service';
import { DocumentoService } from 'src/menu/documentos/documentos.service';
import { detectMenu } from 'src/core/utils/detectMenu';
import { processText } from 'src/core/utils/processText';

@Injectable()
export class WebhookService {
  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private threadService: ThreadService
  ) { }

  async handler(event: any) {
    try {
      const changes = event.entry[0].changes[0].value;
      if (!changes.messages) {
        throw new BadRequestException('No messages found in the received body');
      }
      const message = changes.messages[0];
      const senderNumber = message.from;
      const user = await this.userService.findUser(senderNumber);
      if (!user) {
        throw new BadRequestException('User not found in database');
      }
      if (message.text) {
        return await this.threadService.conversation(message, senderNumber)
      } if (message.audio) {
        return await this.threadService.conversation(message, senderNumber)
      } else if (message.document) {
        return await this.threadService.documentConversation(message, senderNumber)
      } else if (message.interactive.list_reply) {
        const menu = message.interactive.list_reply.id;
        return this.menuService.sendInteractiveMenu(menu, senderNumber);
      } else if (message.interactive.button_reply) {
        const menu = message.interactive.button_reply.id;
        return this.menuService.sendInteractiveMenu(menu, senderNumber);
      } else {
        throw new Error('Unsupported message type');
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error processing message',
          error: error.message,
        }),
      };
    }
  }
}
