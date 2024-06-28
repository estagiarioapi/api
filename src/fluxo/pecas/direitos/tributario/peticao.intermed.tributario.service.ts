import { Injectable } from '@nestjs/common';

@Injectable()
export class PeticaoIntermediariaTributarioService {
  constructor() {}

  async sendContestacao() {}

  async sendImpugnacaoContestacao() {}

  async sendContraEmbargosDeDeclaracao() {}

  async sendContraApelacao() {}

  async sendAlegacoesFinais() {}

  async sendContraAgravoDeInstrumento() {}
}
