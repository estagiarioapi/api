import { Controller } from '@nestjs/common';
import { FluxoService } from './fluxo.service';

@Controller('fluxo')
export class FluxoController {
  constructor(private fluxoService: FluxoService) {}
}
