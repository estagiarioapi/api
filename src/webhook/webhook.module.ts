import { Module } from '@nestjs/common';
import { FluxoContratoService } from '../fluxo/contratos/fluxo.contratos.service';
import { FluxoService } from '../fluxo/fluxo.service';
import { FluxoDireitoPecaService } from '../fluxo/pecas/fluxo.direito.peca.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { PeticaoInicialService } from 'src/fluxo/pecas/fluxo.peticao.inicial.service';
import { RecursoService } from 'src/fluxo/pecas/fluxo.recurso.service';
import { PeticaoIntermediariaService } from 'src/fluxo/pecas/fluxo.peticao.intermed.service';

@Module({
  imports: [],
  controllers: [WebhookController],
  providers: [
    WebhookService,
    FluxoService,
    FluxoContratoService,
    FluxoDireitoPecaService,
    PeticaoInicialService,
    PeticaoIntermediariaService,
    RecursoService
  ],
})
export class WebhookModule { }
