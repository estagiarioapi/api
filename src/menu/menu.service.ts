import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from '../core/integrations/conversation.service';
import { UserService } from '../core/integrations/user.service';
import { ReplyService } from '../core/replyes/reply.service';
import { FluxoContratoService } from './contratos/fluxo.contratos.service';
import { FluxoDocumentoService } from './documentos/fluxo.documento.service';
import { PecasDireitosService } from './pecas/direitos/pecas.direitos.service';
import { FluxoDireitoPecaService } from './pecas/fluxo.direito.peca.service';
import { PeticaoInicialService } from './pecas/menus/inicial/fluxo.peticao.inicial.service';
import { PeticaoIntermediariaService } from './pecas/menus/intermediaria/fluxo.peticao.intermed.service';
import { RecursoService } from './pecas/menus/recurso/fluxo.recurso.service';
import { contratos, documentosMenus, menuPeticaoInicial, menuPeticaoIntermed, menuRecursos, pecasProcessuaisDireitosMenu, peticoesIniciais, peticoesIntermediarias, recursos, tipoContratoMenu } from 'src/core/utils/cache';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class MenuService {
  constructor(
    private fluxoPecaService: FluxoDireitoPecaService,
    private fluxoContratoService: FluxoContratoService,
    private peticaoInicialService: PeticaoInicialService,
    private peticaoIntermedService: PeticaoIntermediariaService,
    private recursoService: RecursoService,
    private pecasService: PecasDireitosService,
    private fluxoDocumentoService: FluxoDocumentoService,
    private userService: UserService,
    private conversationService: ConversationService,
    private replyService: ReplyService,
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
                {
                  id: '1005',
                  title: 'Análise Documentos',
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
    } else if (menuId === '1005') {
      return this.sendAnaliseDocumentos(phoneNumber);
    } else if (documentosMenus.includes(menuId)) {
      return this.fluxoDocumentoService.sendCadaFluxo(menuId, phoneNumber);
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
    } else if (menuId === '13') {
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
    } else if (contratos.includes(menuId)) {
      return this.fluxoContratoService.sendCadaContrato(phoneNumber, menuId);
    } else if (recursos.includes(menuId)) {
      return this.pecasService.sendRecurso(phoneNumber, menuId);
    } else if (contratos.includes(menuId)) {
      return this.fluxoContratoService.sendCadaContrato(phoneNumber, menuId);
    } else if (menuId === '1020') {
      return this.replyService.replyAfterEditOptionSelected(phoneNumber);
    } else if (menuId === '1021') {
      const user = await this.userService.findUser(phoneNumber);
      const openedConversation =
        await this.conversationService.findOpenedConversation(user.id);
      if (openedConversation) {
        const ccvs = await this.conversationService.desactiveLastConversation(
          openedConversation.id,
        );
      }
      return await this.sendInteractiveMessage(phoneNumber);
    } else if(menuId === '1022') {
      return await this.replyService.replyLeadOptionYes(phoneNumber)
    } else if(menuId === '1023') {
      return await this.replyService.replyLeadOptionNo(phoneNumber)
    }
  }
  async sendAuxiliarJuridicoMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const assistant_id = 'asst_PnosQim2RndvcNgW0yQiKx1M';
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
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
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',

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

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }
  async sendNotificacaoExtrajudicialMenu(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const assistant_id = 'asst_OshFRCvLJUIO7b5nkGodEq7H';
    const messages = [
      {
        text: 'Perfeito, chefe! Foi selecionada *Notificação Extrajudicial.* A partir disso, preciso que me *descreva o caso*, detalhando de *forma precisa* o ocorrido, para que eu possa entender melhor a situação e atender ao seu pedido da melhor maneira possível.',
      },
      {
        text: '*Descreva o caso concreto, detalhadamente, em uma única mensagem.*',
      },
    ];

    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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

    const updateUserData =
      await this.conversationService.createConversationInDb(
        assistant_id,
        user.id,
      );

    return true;
  }
  async sendAnaliseDocumentos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const messages = [
      {
        text: 'Você selecionou *Interação com documentos*. Nessa funcionalidade, consigo desempenhar funções distintas como por exemplo: *Interagir, resumir e analisar documentos*, bem como *comparar dois documentos distintos*. Estou apto a interagir com petições, contratos e decisões judiciais. Para realizar essas funções, você deverá enviar um documento para que eu possa realizar a leitura do arquivo. Com base nisso, poderei: ',
      },
      {
        text: '📝 *Extrair informações de documentos*: Nesta tarefa, posso responder a questionamentos a respeito das informações que constam no documento.\n 📃 *Resumir documentos*: Nesta funcionalidade, consigo resumir um documento, extraindo os pontos principais.\n 📊 *Analisar documentos*: Neste recurso, sou capaz de analisar o conteúdo do documento e fornecer sugestões de melhoria e aprimoramento, identificando os pontos fracos e fortes do arquivo enviado.\n 📑 *Comparar dois documentos*: Nesta função, você pode me enviar dois documentos e eu consigo fazer um paralelo entre eles, traçando as diferenças e semelhanças, bem como identificando as vantagens de um sobre o outro.',
      },
    ];

    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
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

    try {
      const returnMenu = await this.sendAnaliseDocumentosMenu(phoneNumber);
    } catch (error) {
      console.error('Error sending documents menu');
    }
  }
  async sendAnaliseDocumentosMenu(phoneNumber: string) {
    const messagePayloadMenu = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Diante disso, como posso te ajudar, chefe?',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '1010',
                  title: 'Extrair informações',
                },
                {
                  id: '1011',
                  title: 'Resumir documentos',
                },
                {
                  id: '1012',
                  title: 'Analisar documentos',
                },
                {
                  id: '1013',
                  title: 'Comparar documentos',
                },
              ],
            },
          ],
        },
      },
    };

    const headers = {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
      'Content-Type': 'application/json',
    };

    try {
      const response2 = await axios.post(url, messagePayloadMenu, { headers });
      if (response2.status !== 200) throw new Error('Failed to send message');
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
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
    } else if (menuId === '84') {
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
