import { Module } from '@nestjs/common';
import { FluxoModule } from './fluxo/fluxo.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [FluxoModule, WebhookModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
