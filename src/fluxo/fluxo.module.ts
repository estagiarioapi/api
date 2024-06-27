import { Module } from '@nestjs/common';
import { FluxoContratoService } from './contratos/fluxo.contratos.service';
import { FluxoController } from './fluxo.controller';
import { FluxoService } from './fluxo.service';
import { FluxoPecaService } from './pecas/fluxo.peca.service';

@Module({
  providers: [FluxoService, FluxoPecaService, FluxoContratoService],
  controllers: [FluxoController],
})
export class FluxoModule {}
