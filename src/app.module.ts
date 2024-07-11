import { Module } from '@nestjs/common';
import { FluxoModule } from './menu/menu.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [FluxoModule, WebhookModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
