import { Module } from '@nestjs/common';
import { FluxoContratoService } from '../fluxo/contratos/fluxo.contratos.service';
import { FluxoService } from '../fluxo/fluxo.service';
import { FluxoPecaService } from '../fluxo/pecas/fluxo.peca.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [
    WebhookService,
    FluxoService,
    FluxoContratoService,
    FluxoPecaService,
  ],
})
export class WebhookModule {}
