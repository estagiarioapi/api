import { Module } from '@nestjs/common';
import { FluxoService } from '../fluxo/fluxo.service';
import { FluxoPecaService } from '../fluxo/pecas/fluxo.peca.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [WebhookService, FluxoService, FluxoPecaService],
})
export class WebhookModule {}
