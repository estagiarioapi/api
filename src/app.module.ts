import { Module } from '@nestjs/common';
import { FluxoModule } from './menu/menu.module';
import { WebhookModule } from './webhook/webhook.module';
import { EventModule } from './events/event.module';

@Module({
  imports: [FluxoModule, WebhookModule, EventModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
