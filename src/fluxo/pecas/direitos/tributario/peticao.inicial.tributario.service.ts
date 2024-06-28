import { Injectable } from '@nestjs/common';

@Injectable()
export class PeticaoInicialTributarioService {
  constructor() {}

  async sendMandadoDeSeguranca() {}

  async sendRepeticaoDeIndebito() {}

  async sendAcaoAnulatorio() {}

  async sendExcecaoDePreExecutividade() {}

  async sendInexistenciaRelacaoJuridica() {}

  async sendDeclaratoriaAcaoRepeticaoIndebito() {}

  async sendEmbargosExecucaoFiscal() {}
}
