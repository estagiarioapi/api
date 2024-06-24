import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluxoModule } from './fluxo/fluxo.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [FluxoModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
