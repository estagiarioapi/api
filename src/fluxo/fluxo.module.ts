import { Module } from '@nestjs/common';
import { FluxoController } from './fluxo.controller';
import { FluxoService } from './fluxo.service';

@Module({
  providers: [FluxoService],
  controllers: [FluxoController],
})
export class FluxoModule {}
