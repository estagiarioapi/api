import { Module } from '@nestjs/common';
import { FluxoService } from './fluxo.service';
import { FluxoController } from './fluxo.controller';

@Module({
  providers: [FluxoService],
  controllers: [FluxoController],
})
export class FluxoModule {}
