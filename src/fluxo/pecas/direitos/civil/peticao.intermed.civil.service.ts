import { Injectable } from '@nestjs/common';

@Injectable()
export class PeticaoIntermediariaEmpresarialService {
  constructor() {}

  async sendEmbargosExecucao() {}

  async sendEmbargosDeTerceiro() {}

  async sendContestacao() {}

  async sendImpugnacaoContestacao() {}

  async sendContraEmbargosDeclaracao() {}

  async sendContraApelacao() {}

  async sendContraAgravoInstrumento() {}

  async sendIncidenteDesconPersonaJuridica() {}

  async sendAlegacoesFinais() {}
}
