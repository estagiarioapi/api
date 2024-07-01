import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { FluxoContratoService } from './contratos/fluxo.contratos.service';
import { PecasDireitosService } from './pecas/direitos/pecas.direitos.service';
import { FluxoDireitoPecaService } from './pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from './pecas/inicial/fluxo.peticao.inicial.service';
import { PeticaoIntermediariaService } from './pecas/intermediaria/fluxo.peticao.intermed.service';
import { RecursoService } from './pecas/recurso/fluxo.recurso.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';
const peticoesIniciais = [
  '85',
  '86',
  '87',
  '88',
  '89',
  '90',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '99',
  '100',
  '101',
  '102',
  '103',
  '104',
  '105',
  '106',
  '107',
  '108',
  '109',
  '110',
  '111',
  '112',
  '113',
  '114',
  '115',
  '116',
  '117',
  '118',
  '119',
  '120',
  '121',
  '122',
  '123',
  '124',
  '125',
  '126',
  '127',
  '128',
  '129',
  '130',
  '131',
  '132',
  '133',
  '134',
  '135',
  '136',
  '137',
  '138',
  '139',
  '140',
  '141',
];

const peticoesIntermediarias = [
  '142',
  '143',
  '144',
  '145',
  '146',
  '147',
  '148',
  '149',
  '150',
  '151',
  '152',
  '153',
  '154',
  '155',
  '156',
  '157',
  '158',
  '159',
  '160',
  '161',
  '162',
  '163',
  '164',
  '165',
  '166',
  '167',
  '168',
  '169',
  '170',
  '171',
  '172',
  '173',
  '174',
  '175',
  '176',
  '177',
  '178',
  '179',
  '180',
  '181',
  '182',
  '183',
  '184',
  '185',
  '186',
  '187',
  '188',
  '189',
  '190',
  '191',
  '192',
  '193',
];

const recursos = [
  '194',
  '195',
  '196',
  '197',
  '198',
  '199',
  '200',
  '201',
  '202',
  '203',
  '204',
  '205',
  '206',
  '207',
  '208',
  '209',
  '210',
  '211',
  '212',
  '213',
  '214',
  '215',
  '216',
  '217',
  '218',
  '219',
  '220',
  '221',
  '222',
  '223',
  '224',
  '225',
  '226',
  '227',
  '228',
  '229',
  '230',
  '231',
  '232',
  '233',
  '234',
  '235',
  '236',
  '237',
  '238',
  '239',
  '240',
  '241',
  '242',
  '243',
  '244',
  '245',
  '246',
  '247',
  '248',
  '249',
  '250',
  '251',
  '252',
  '253',
  '254',
  '255',
  '256',
  '257',
];

const menuRecursos = ['64', '67', '70', '73', '76', '79', '82', '85'];
const menuPeticaoIntermed = ['63', '66', '69', '72', '75', '78', '81', '84'];
const menuPeticaoInicial = ['62', '65', '68', '71', '74', '77', '80', '83'];
const tipoContratoMenu = ['13', '14', '15', '16', '17', '18'];
const pecasProcessuaisDireitosMenu = [
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];
@Injectable()
export class FluxoService {
  constructor(
    private fluxoPecaService: FluxoDireitoPecaService,
    private fluxoContratoService: FluxoContratoService,
    private peticaoInicialService: PeticaoInicialService,
    private peticaoIntermedService: PeticaoIntermediariaService,
    private recursoService: RecursoService,
    private pecasService: PecasDireitosService,
  ) { }

  async sendInteractiveMessage(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Olá chefe, como posso te ajudar?',
        },
        action: {
          button: 'Funcionalidades',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '1',
                  title: 'Auxiliar Jurídico',
                },
                {
                  id: '2',
                  title: 'Notif. Extrajudicial',
                },
                {
                  id: '3',
                  title: 'Peças Processuais',
                },
                {
                  id: '4',
                  title: 'Contratos',
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
  async sendInteractiveMenu(menuId: string, phoneNumber: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '1') {
      return this.sendAuxiliarJuridicoMenu(phoneNumber);
    } else if (menuId === '2') {
      return this.sendNotificacaoExtrajudicialMenu(phoneNumber);
    } else if (menuId === '3') {
      return this.sendPecasProcessuaisMenu(phoneNumber);
    } else if (menuId === '4') {
      return this.sendContratosMenu(phoneNumber);
    } else if (pecasProcessuaisDireitosMenu.includes(menuId)) {
      return this.sendPecasProcessuaisDireitosMenu(phoneNumber, menuId);
    } else if (tipoContratoMenu.includes(menuId)) {
      return this.sendContratosMenuTipo(phoneNumber, menuId);
    } else if (menuPeticaoInicial.includes(menuId)) {
      return this.sendPetiçõesIniciais(phoneNumber, menuId);
    } else if (menuPeticaoIntermed.includes(menuId)) {
      return this.sendPeticoesIntermediarias(phoneNumber, menuId);
    } else if (menuRecursos.includes(menuId)) {
      return this.sendRecursos(phoneNumber, menuId);
    } else if (peticoesIniciais.includes(menuId)) {
      return this.pecasService.sendPeticaoInicial(phoneNumber, menuId);
    } else if (peticoesIntermediarias.includes(menuId)) {
      return this.pecasService.sendPeticaoIntermediaria(phoneNumber, menuId);
    } else if (recursos.includes(menuId)) {
      return this.pecasService.sendRecurso(phoneNumber, menuId);
    }
  }
  async sendAuxiliarJuridicoMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Você selecionou a funcionalidade de *Auxiliar Jurídico.* Nessa função, você poderá enviar suas dúvidas para que eu possa responder. Também ofereço suporte direcionado às suas necessidades legais, isso inclui esclarecimentos sobre legislação, interpretações jurídicas e orientações sobre como proceder diante de um caso, ao me enviar o fato, visando facilitar suas decisões e ações legais. 👨‍⚖️',
      },
      {
        text: '*Chefe, especificamente nessa função, quando estiver satisfeito com o auxílio jurídico fornecido, basta me enviar a palavra "Menu" no chat para retornar ao Menu Principal e acessar as outras funcionalidades.*',
      },
      {
        text: '*Envie seu questionamento em uma única mensagem.*',
      },
    ];
    const headers = {
      Authorization: process.env.ACCESS_TOKEN,

      'Content-Type': 'application/json',
    };
    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }

    return true;
  }
  async sendNotificacaoExtrajudicialMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionada *Notificação Extrajudicial.* A partir disso, preciso que me *descreva o caso*, detalhando de *forma precisa* o ocorrido, para que eu possa entender melhor a situação e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];

    const headers = {
      Authorization: process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    };

    for (const message of messages) {
      const messagePayload = {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: phoneNumber,
        type: 'text',
        text: { body: message.text },
      };

      try {
        const response = await axios.post(url, messagePayload, { headers });
        if (response.status !== 200) throw new Error('Failed to send message');
      } catch (error) {
        console.error('Error sending message:', error);
        return false;
      }
    }
  }
  async sendPecasProcessuaisMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou a funcionalidade de *Peças processuais.* Agora escolha o tipo direito inserido na peça que você quer redigir.',
        },
        action: {
          button: 'Escolha o direito',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '5',
                  title: 'Direito Civil',
                },
                {
                  id: '6',
                  title: 'Direito Empresarial',
                },
                {
                  id: '7',
                  title: 'Direito Penal',
                },
                {
                  id: '8',
                  title: 'Dir. Constitucional',
                },
                {
                  id: '9',
                  title: 'Dir. do Trabalho',
                },
                {
                  id: '10',
                  title: 'Direito Tributário',
                },
                {
                  id: '11',
                  title: 'Dir. Administrativo',
                },
                {
                  id: '12',
                  title: 'Dir. Previdenciário',
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
  async sendPecasProcessuaisDireitosMenu(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '5') {
      return this.fluxoPecaService.sendPecaDireitoCivil(phoneNumber);
    } else if (menuId === '6') {
      return this.fluxoPecaService.sendPecaDireitoEmpresarial(phoneNumber);
    } else if (menuId === '7') {
      return this.fluxoPecaService.sendPecaDireitoPenal(phoneNumber);
    } else if (menuId === '8') {
      return this.fluxoPecaService.sendPecaDireitoConstitucional(phoneNumber);
    } else if (menuId === '9') {
      return this.fluxoPecaService.sendPecaDireitoDoTrabalho(phoneNumber);
    } else if (menuId === '10') {
      return this.fluxoPecaService.sendPecaDireitoTributario(phoneNumber);
    } else if (menuId === '11') {
      return this.fluxoPecaService.sendPecaDireitoAdministrativo(phoneNumber);
    } else if (menuId === '12') {
      return this.fluxoPecaService.sendPecaDireitoPrevidenciario(phoneNumber);
    }
  }
  async sendPetiçõesIniciais(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '62') {
      return this.peticaoInicialService.sendDireitoCivil(phoneNumber);
    } else if (menuId === '65') {
      return this.peticaoInicialService.sendDireitoEmpresarial(phoneNumber);
    } else if (menuId === '68') {
      return this.peticaoInicialService.sendDireitoPenal(phoneNumber);
    } else if (menuId === '71') {
      return this.peticaoInicialService.sendDireitoConstitucional(phoneNumber);
    } else if (menuId === '74') {
      return this.peticaoInicialService.sendDireitoDoTrabalho(phoneNumber);
    } else if (menuId === '77') {
      return this.peticaoInicialService.sendDireitoTributario(phoneNumber);
    } else if (menuId === '80') {
      return this.peticaoInicialService.sendDireitoAdministrativo(phoneNumber);
    } else if (menuId === '83') {
      return this.peticaoInicialService.sendDireitoPrevidenciario(phoneNumber);
    }
  }
  async sendPeticoesIntermediarias(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '63') {
      return this.peticaoIntermedService.sendDireitoCivil(phoneNumber);
    } else if (menuId === '66') {
      return this.peticaoIntermedService.sendDireitoEmpresarial(phoneNumber);
    } else if (menuId === '69') {
      return this.peticaoIntermedService.sendDireitoPenal(phoneNumber);
    } else if (menuId === '72') {
      return this.peticaoIntermedService.sendDireitoConstitucional(phoneNumber);
    } else if (menuId === '75') {
      return this.peticaoIntermedService.sendDireitoDoTrabalho(phoneNumber);
    } else if (menuId === '78') {
      return this.peticaoIntermedService.sendDireitoTributario(phoneNumber);
    } else if (menuId === '81') {
      return this.peticaoIntermedService.sendDireitoAdministrativo(phoneNumber);
    } else if (menuId === '84') {
      return this.peticaoIntermedService.sendDireitoPrevidenciario(phoneNumber);
    }
  }
  async sendRecursos(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '64') {
      return this.recursoService.sendDireitoCivil(phoneNumber);
    } else if (menuId === '67') {
      return this.recursoService.sendDireitoEmpresarial(phoneNumber);
    } else if (menuId === '70') {
      return this.recursoService.sendDireitoPenal(phoneNumber);
    } else if (menuId === '73') {
      return this.recursoService.sendDireitoConstitucional(phoneNumber);
    } else if (menuId === '76') {
      return this.recursoService.sendDireitoDoTrabalho(phoneNumber);
    } else if (menuId === '78') {
      return this.recursoService.sendDireitoTributario(phoneNumber);
    } else if (menuId === '82') {
      return this.recursoService.sendDireitoAdministrativo(phoneNumber);
    } else if (menuId === '85') {
      return this.recursoService.sendDireitoPrevidenciario(phoneNumber);
    }
  }
  async sendContratosMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou a funcionalidade de *Contratos*. Agora escolha o tipo de contrato que você quer redigir.',
        },
        action: {
          button: 'Escolha o contrato',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '13',
                  title: 'Civis',
                },
                {
                  id: '14',
                  title: 'Imobiliários',
                },
                {
                  id: '15',
                  title: 'Empresariais',
                },
                {
                  id: '16',
                  title: 'Agrários',
                },
                {
                  id: '17',
                  title: 'Culturais',
                },
                {
                  id: '18',
                  title: 'Inst. Para Advocacia',
                  description: 'Instrumentos para Advocacia',
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
  async sendContratosMenuTipo(phoneNumber: string, menuId: string) {
    if (!menuId) {
      throw new BadRequestException('Favor fornecer o menu');
    }
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    if (menuId === '13') {
      return this.fluxoContratoService.sendContratosCivis(phoneNumber);
    } else if (menuId === '14') {
      return this.fluxoContratoService.sendContratosImobiliarios(phoneNumber);
    } else if (menuId === '15') {
      return this.fluxoContratoService.sendContratosEmpresariais(phoneNumber);
    } else if (menuId === '16') {
      return this.fluxoContratoService.sendContratosAgrarios(phoneNumber);
    } else if (menuId === '17') {
      return this.fluxoContratoService.sendContratosCulturais(phoneNumber);
    } else if (menuId === '18') {
      return this.fluxoContratoService.sendContratosDeInstrumentosParaAdvocacia(
        phoneNumber,
      );
    }
  }
}
