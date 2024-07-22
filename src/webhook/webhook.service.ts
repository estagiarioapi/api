import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ThreadService } from 'src/thread/thread.service';
import { UserService } from '../core/integrations/user.service';
import { MenuService } from '../menu/menu.service';

@Injectable()
export class WebhookService {
  constructor(
    private menuService: MenuService,
    private userService: UserService,
    private threadService: ThreadService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async handler(event: any): Promise<any> {
    try {
      console.log('Recebido evento:', JSON.stringify(event));

      const changes = event.entry[0].changes[0].value;
      if (!changes.messages) {
        console.log('Nenhuma mensagem encontrada no corpo recebido');
        throw new BadRequestException('No messages found in the received body');
      }

      const message = changes.messages[0];
      const messageId = message.id;
      const senderNumber = message.from;

      console.log('Processando mensagem ID:', messageId, 'de:', senderNumber);

      // Verificar se a mensagem já foi processada
      const cachedMessage = await this.cacheManager.get(messageId);
      console.log('cache:', cachedMessage);
      if (cachedMessage) {
        console.log(`Mensagem ${messageId} já foi processada. Ignorando...`);
        return { status: 'Mensagem já processada' };
      }

      // Armazenar o ID da mensagem no cache para evitar duplicação
      await this.cacheManager.set(messageId, true, 3600);

      const [user, lead] = await Promise.all([
        this.userService.findUser(senderNumber),
        this.userService.getLead(senderNumber),
      ]);

      console.log('cache2:', this.cacheManager.get(messageId));
      // Armazenar informações do usuário e do lead no cache
      await this.cacheManager.set(senderNumber, { user, lead });

      if (user) {
        console.log('Usuário encontrado:', user);
        if (message.text) {
          return await this.threadService.conversation(message, senderNumber);
        } else if (message.audio) {
          return await this.threadService.conversation(message, senderNumber);
        } else if (message.document) {
          return await this.threadService.documentConversation(
            message,
            senderNumber,
          );
        } else if (message.interactive.list_reply) {
          const menu = message.interactive.list_reply.id;
          return this.menuService.sendInteractiveMenu(menu, senderNumber);
        } else if (message.interactive.button_reply) {
          const menu = message.interactive.button_reply.id;
          return this.menuService.sendInteractiveMenu(menu, senderNumber);
        } else {
          throw new Error('Unsupported message type');
        }
      } else if (lead) {
        console.log('Lead encontrado:', lead);
        if (message.text) {
          return await this.threadService.leadConversation(
            message,
            senderNumber,
          );
        } else if (message.interactive.list_reply) {
          const menu = message.interactive.list_reply.id;
          return this.menuService.sendInteractiveMenu(menu, senderNumber);
        } else if (message.interactive.button_reply) {
          const menu = message.interactive.button_reply.id;
          return this.menuService.sendInteractiveMenu(menu, senderNumber);
        } else {
          throw new Error('Unsupported message type');
        }
      } else {
        console.log('Nenhum usuário ou lead encontrado para:', senderNumber);
      }
      return;
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        status: 'Error processing message',
        error: error.message,
      };
    }
  }
}
