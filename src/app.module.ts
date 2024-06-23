import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [ChatModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
