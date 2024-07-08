import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ContratosAgrariosService } from './agrario/contratos.agrarios.service';
import { ContratosCivisService } from './civil/contratos.civis.service';
import { ContratosCulturaisService } from './cultural/contratos.culturais.service';
import { ContratosEmpresariaisService } from './empresarial/contratos.empresariais.service';
import { ContratosImobiliariosService } from './imobiliario/contratos.imobiliarios.service';
import { ContratosInstrumentosAdvocaticiosService } from './instrumentosAdvocacia/contratos.instrumentos.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class FluxoContratoService {
  constructor(
    private contratosAgrarios: ContratosAgrariosService,
    private contratosCivis: ContratosCivisService,
    private contratosCulturais: ContratosCulturaisService,
    private contratosEmpresariais: ContratosEmpresariaisService,
    private contratosImobiliarios: ContratosImobiliariosService,
    private instrumentosAdvocacia: ContratosInstrumentosAdvocaticiosService,
  ) {}
  async sendContratosCivis(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Contratos Civis*. Agora me indique qual você deseja.',
        },
        action: {
          button: 'Contratos Civ.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '19',
                  title: 'Compra e venda',
                },
                {
                  id: '20',
                  title: 'Prestação de Serviços',
                },
                {
                  id: '21',
                  title: 'Empreitada',
                },
                {
                  id: '22',
                  title: 'Distrato',
                },
                {
                  id: '23',
                  title: 'Comodato',
                },
                {
                  id: '24',
                  title: 'Depósito',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendContratosImobiliarios(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Contratos Imobiliários.* Agora me indique qual você deseja.',
        },
        action: {
          button: 'Contratos Imob.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '25',
                  title: 'C. e Venda de Imóvel',
                  description: 'Compra e Venda de Imóvel',
                },
                {
                  id: '26',
                  title: 'Locação',
                },
                {
                  id: '27',
                  title: 'Financ. Imobiliário',
                  description: 'Financiamento Imobiliário',
                },
                {
                  id: '28',
                  title: 'Corre. Imobiliária',
                  description: 'Corretagem Imobiliária',
                },
                {
                  id: '29',
                  title: 'Built to Suit',
                },
                {
                  id: '30',
                  title: 'Cessão de Dir. Pos.',
                  description: 'Cessão de Direitos Possessórios',
                },
                {
                  id: '31',
                  title: 'Permutas de Imóveis',
                },
                {
                  id: '32',
                  title: 'Comodato de Imóvel',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendContratosEmpresariais(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Contratos Empresariais.* Agora me indique qual você deseja.',
        },
        action: {
          button: 'Contratos Empr.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '33',
                  title: 'Sociedade',
                },
                {
                  id: '34',
                  title: 'Franquia',
                },
                {
                  id: '35',
                  title: 'Fornecimento',
                },
                {
                  id: '36',
                  title: 'Distribuição',
                },
                {
                  id: '37',
                  title: 'Licença de uso...',
                  description: 'Licença de Uso de Marca ou Patente',
                },
                {
                  id: '38',
                  title: 'Acordo de Acionistas',
                },
                {
                  id: '39',
                  title: 'Parceria',
                },
                {
                  id: '40',
                  title: 'Factoring',
                },
                {
                  id: '41',
                  title: 'Contrato Social',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendContratosAgrarios(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Contratos Agrários.* Agora me indique qual você deseja.',
        },
        action: {
          button: 'Contratos Agrários',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '42',
                  title: 'Arrendamento Rural',
                },
                {
                  id: '43',
                  title: 'Parceria Rural',
                },
                {
                  id: '44',
                  title: 'C. e V. de P. Agríc.',
                  description: 'Compra e Venda de Produtos Agrícolas',
                },
                {
                  id: '45',
                  title: 'Com. de Imóvel Rural',
                },
                {
                  id: '46',
                  title: 'F. de Ins. Agrícolas',
                  description: 'Fornecimento de Insumos Agrícolas',
                },
                {
                  id: '47',
                  title: 'Gestão de Pro. Rural',
                  description: 'Gestão de Propriedade Rural',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendContratosCulturais(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Contratos Culturais.* Agora me indique qual você deseja.',
        },
        action: {
          button: 'Contratos Culturais',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '48',
                  title: 'Patrocinio Cultural',
                },
                {
                  id: '49',
                  title: 'Parceria Cultural',
                },
                {
                  id: '50',
                  title: 'Co-produção de Ev.',
                  description: 'Co-produção de Eventos',
                },
                {
                  id: '51',
                  title: 'Cessão de Dir. Auto.',
                  description: 'Cessão de Direitos Autorais',
                },
                {
                  id: '52',
                  title: 'P. de Serviços Arti.',
                  description: 'Prestação de Serviços Artísticos',
                },
                {
                  id: '53',
                  title: 'Realização de Show',
                },
                {
                  id: '54',
                  title: 'Distr. de Obras',
                  description: 'Distribuição de Obras',
                },
                {
                  id: '55',
                  title: 'Agencia. Físico',
                  description: 'Agenciamento Físico',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendContratosDeInstrumentosParaAdvocacia(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Instrumentos para Advocacia* Agora me indique qual você deseja.',
        },
        action: {
          button: 'Instrumentos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '56',
                  title: 'P. de Serviços Adv.',
                  description: 'Proposta de Serviços Advocatícios',
                },
                {
                  id: '57',
                  title: 'Procuração',
                },
                {
                  id: '58',
                  title: 'Decl. de Hipossufic.',
                  description: 'Declaração de Hipossuficiência',
                },
                {
                  id: '59',
                  title: 'Honorários',
                },
                {
                  id: '60',
                  title: 'P. entre Escritórios',
                  description: 'Parceria Entre Escritórios',
                },
                {
                  id: '61',
                  title: 'T. De Con. de Dívida',
                  description: 'Termo de Confissão de Dívida',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization:
          'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendCadaContrato(phoneNumber: string, menuId: string) {
    switch (menuId) {
      case '19':
        return this.contratosCivis.sendCompraEVenda(phoneNumber);
      case '20':
        return this.contratosCivis.sendPrestacaoServicos(phoneNumber);
      case '21':
        return this.contratosCivis.sendEmpreitada(phoneNumber);
      case '22':
        return this.contratosCivis.sendDistrato(phoneNumber);
      case '23':
        return this.contratosCivis.sendComodato(phoneNumber);
      case '24':
        return this.contratosCivis.sendDeposito(phoneNumber);
      case '25':
        return this.contratosImobiliarios.sendCompraVendaImóvel(phoneNumber);
      case '26':
        return this.contratosImobiliarios.sendLocação(phoneNumber);
      case '27':
        return this.contratosImobiliarios.sendFinanciamentoImob(phoneNumber);
      case '28':
        return this.contratosImobiliarios.sendCorretagemImob(phoneNumber);
      case '29':
        return this.contratosImobiliarios.sendBuiltToSuit(phoneNumber);
      case '30':
        return this.contratosImobiliarios.sendCessaoDireitoPossesorio(
          phoneNumber,
        );
      case '31':
        return this.contratosImobiliarios.sendPermutaImoveis(phoneNumber);
      case '32':
        return this.contratosImobiliarios.sendComodatoImovel(phoneNumber);
      case '33':
        return this.contratosEmpresariais.sendSociedade(phoneNumber);
      case '34':
        return this.contratosEmpresariais.sendFranquia(phoneNumber);
      case '35':
        return this.contratosEmpresariais.sendFornecimento(phoneNumber);
      case '36':
        return this.contratosEmpresariais.sendDistribuicao(phoneNumber);
      case '37':
        return this.contratosEmpresariais.sendLicencaMarcaPatente(phoneNumber);
      case '38':
        return this.contratosEmpresariais.sendAcordoAcionista(phoneNumber);
      case '39':
        return this.contratosEmpresariais.sendParceria(phoneNumber);
      case '40':
        return this.contratosEmpresariais.sendFactoring(phoneNumber);
      case '41':
        return this.contratosEmpresariais.sendContratoSocial(phoneNumber);
      case '42':
        return this.contratosAgrarios.sendArrendamentoRural(phoneNumber);
      case '43':
        return this.contratosAgrarios.sendParceriaRural(phoneNumber);
      case '44':
        return this.contratosAgrarios.sendCompraVendaProdutosAgricolas(
          phoneNumber,
        );
      case '45':
        return this.contratosAgrarios.sendComodadoImovelRural(phoneNumber);
      case '46':
        return this.contratosAgrarios.sendFornecimentoInsumosAgricolas(
          phoneNumber,
        );
      case '47':
        return this.contratosAgrarios.sendGestaoPropriedadeRural(phoneNumber);
      case '48':
        return this.contratosCulturais.sendPatrocinioCultural(phoneNumber);
      case '49':
        return this.contratosCulturais.sendParceriaCultural(phoneNumber);
      case '50':
        return this.contratosCulturais.sendCoProducaoDeEventos(phoneNumber);
      case '51':
        return this.contratosCulturais.sendCessaoDireitosAutorais(phoneNumber);
      case '52':
        return this.contratosCulturais.sendServicosArtisticos(phoneNumber);
      case '53':
        return this.contratosCulturais.sendRealizaoDeShow(phoneNumber);
      case '54':
        return this.contratosCulturais.sendDistribuicaoDeObras(phoneNumber);
      case '55':
        return this.contratosCulturais.sendAgenciamentoFisico(phoneNumber);
      case '56':
        return this.instrumentosAdvocacia.sendPropostaServicos(phoneNumber);
      case '57':
        return this.instrumentosAdvocacia.sendProcuracao(phoneNumber);
      case '58':
        return this.instrumentosAdvocacia.sendDeclaracaoHipossuficiencia(
          phoneNumber,
        );
      case '59':
        return this.instrumentosAdvocacia.sendHonorarios(phoneNumber);
      case '60':
        return this.instrumentosAdvocacia.sendParceriaEscritorios(phoneNumber);
      case '61':
        return this.instrumentosAdvocacia.sendTermoConfissaoDeDivida(
          phoneNumber,
        );
    }
  }
}
