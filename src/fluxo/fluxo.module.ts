import { Module } from '@nestjs/common';
import { FluxoContratoService } from './contratos/fluxo.contratos.service';
import { FluxoController } from './fluxo.controller';
import { FluxoService } from './fluxo.service';
import { FluxoDireitoPecaService } from './pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from './pecas/fluxo.peticao.inicial.service';
import { RecursoService } from './pecas/fluxo.recurso.service';
import { PeticaoIntermediariaService } from './pecas/fluxo.peticao.intermed.service';

@Module({
  providers: [FluxoService, FluxoDireitoPecaService, FluxoContratoService, PeticaoInicialService, PeticaoIntermediariaService, RecursoService],
  controllers: [FluxoController],
})
export class FluxoModule { }
