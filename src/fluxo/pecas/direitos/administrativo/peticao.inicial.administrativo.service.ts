import { Injectable } from '@nestjs/common';

@Injectable()
export class PeticaoInicialAdministrativoService {
  constructor() {}

  async sendAcaoOrdinaria() {}

  async sendMandadoDeSeguranca() {}

  async sendAcaoPopular() {}

  async sendAcaoAnulatoria() {}

  async sendAcaoCivilPublica() {}

  async sendAcaoResponsabilidadeCivil() {}

  async sendAcaoDesapropriacaoIndireta() {}
}
