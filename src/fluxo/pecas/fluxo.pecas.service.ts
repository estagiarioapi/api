import { Injectable } from "@nestjs/common";
import { PeticaoInicialService } from "./fluxo.peticao.inicial.service";
import { PeticaoIntermediariaService } from "./fluxo.peticao.intermed.service";
import { RecursoService } from "./fluxo.recurso.service";

@Injectable()
export class FluxoPecaService {
    constructor(private peticaoInicialService: PeticaoInicialService, private peticaoIntermediariaService: PeticaoIntermediariaService, private recursoService: RecursoService) { }

    async sendPeticaoInicial() {

    }

    async sendPeticaoIntermediaria() { }

    async sendRecurso() { }
}