import { Injectable } from '@nestjs/common';

@Injectable()
export class PeticaoIntermediariaEmpresarialService {
  constructor() {}

  async sendContestacao() {}

  async sendImpugnacaoRelacaoDeCredores() {}

  async sendEmbargosExecucao() {}

  async sendEmbargosDeTerceiro() {}

  async sendImpugnacaoContestacao() {}

  async sendContraEmbargoDeclaracao() {}

  async sendContraApelacao() {}

  async sendContraAgravoInstrumento() {}

  async sendAlegacoesFinais() {}

  async sendDesconsideracaoPersonaJuridica() {}
}
