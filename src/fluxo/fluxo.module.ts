import { Module } from '@nestjs/common';
import { FluxoController } from './fluxo.controller';
import { FluxoService } from './fluxo.service';
import { FluxoPecaService } from './pecas/fluxo.peca.service';

@Module({
  providers: [FluxoService, FluxoPecaService],
  controllers: [FluxoController],
})
export class FluxoModule {}
