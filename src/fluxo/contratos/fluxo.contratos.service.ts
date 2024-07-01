import { Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class FluxoContratoService {
  constructor() { }
  async sendContratosCivis(phoneNumber: string) {
    console.log('passou:', phoneNumber);
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
        Authorization: process.env.ACCESS_TOKEN,
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
        Authorization: process.env.ACCESS_TOKEN
        , 'Content-Type': 'application/json',
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
        Authorization: process.env.ACCESS_TOKEN, 'Content-Type': 'application/json',
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
        Authorization: process.env.ACCESS_TOKEN, 'Content-Type': 'application/json',
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
        Authorization: process.env.ACCESS_TOKEN, 'Content-Type': 'application/json',
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
                  title: 'Cessão de Dir. Auto.',
                  description: 'Cessão de Direitos Autorais',
                },
                {
                  id: '60',
                  title: 'Honorários',
                },
                {
                  id: '61',
                  title: 'P. entre Escritórios',
                  description: 'Parceria Entre Escritórios',
                },
                {
                  id: '62',
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
        Authorization: process.env.ACCESS_TOKEN, 'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
}
