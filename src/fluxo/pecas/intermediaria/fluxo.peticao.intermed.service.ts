import { Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';
const auth =
  'Bearer EAARMCGe1MUcBO94QEcOVEIAhTrdcGIIePzZC4L4yHs2Vg2GjRxkshxW7xc4iOwWeju64MhOYK7TKDKGVYOwUlf26OtLtAksxerWfxZA1RltKBADw0wnkwVM9Tc6ObynJvTwHwYhYVsLSKjjCPX95aYggrVWHHJ9cheAHl5GOB3fkG4ZCI5UUDvzf5wS9a1EGsVZAoUYtZAHrRE1ZAIeMoZD';

@Injectable()
export class PeticaoIntermediariaService {
  async sendDireitoCivil(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Petição Intermediária*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Petições Intermed.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '142',
                  title: 'Embargos a Execução',
                },
                {
                  id: '143',
                  title: 'Embargos de Terceiros',
                },
                {
                  id: '144',
                  title: 'Contestação',
                },
                {
                  id: '145',
                  title: 'Impug. à Contestação',
                  description: 'Impugnação à contestação',
                },
                {
                  id: '146',
                  title: 'Con. ao Emb. de Dec.',
                  description: 'Contrarrazões aos embargos de declaração',
                },
                {
                  id: '147',
                  title: 'Contrar. à Apelação',
                },
                {
                  id: '148',
                  title: 'Cont Agra. De Instr.',
                  description: 'Contrarrazões aos agravo de instrumento',
                },
                {
                  id: '149',
                  title: 'Desc. da Pers. Jur.',
                  description:
                    'Incidente de desconsideração da personalidade jurídica',
                },
                {
                  id: '150',
                  title: 'Alegações Finais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoEmpresarial(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Empresarial*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições Intermed.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '151',
                  title: 'Contestação',
                },
                {
                  id: '152',
                  title: 'Imp. à Rel. de Cred.',
                  description: 'Impugnação à relações de credores',
                },
                {
                  id: '153',
                  title: 'Embargos a Execução',
                },
                {
                  id: '154',
                  title: 'Embargos de Terceiro',
                },
                {
                  id: '155',
                  title: 'Impug. à Contestação',
                },
                {
                  id: '156',
                  title: 'Contr. Emb. de Dec.',
                  description: 'Contrarrazões aos Embargos de Declaração',
                },
                {
                  id: '157',
                  title: 'Contr. à Apelação',
                  description: 'Contrarrazões à apelação',
                },
                {
                  id: '158',
                  title: 'Contr. Agr. de Instr',
                  description: 'Contrarrazões ao Agravo de Instrumento',
                },
                {
                  id: '159',
                  title: 'Alegações Finais',
                },
                {
                  id: '160',
                  title: 'Inc. de Desc. da PJ',
                  description:
                    'Incidente de Desconsideração da Personalidade Jurídica',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoPenal(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Penal*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições Intermed.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '161',
                  title: 'Reposta à Acusação',
                },
                {
                  id: '162',
                  title: 'Memoriais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoConstitucional(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Constitucional*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições Intermed.',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '163',
                  title: 'Contestação',
                },
                {
                  id: '164',
                  title: 'Impug. à Contestação',
                  description: 'Impugnação à contestação',
                },
                {
                  id: '165',
                  title: 'Contra. Emb. de Dec.',
                  description: 'Contrarrazões aos embargos de declaração',
                },
                {
                  id: '166',
                  title: 'Contrar. à Apelação',
                },
                {
                  id: '167',
                  title: 'Contrar. a de Inst.',
                  description: 'Contrarrazões ao agravo de instrumento',
                },
                {
                  id: '168',
                  title: 'Alegações Finais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoDoTrabalho(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito do Trabalho*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições Intermed',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '169',
                  title: 'Contestação',
                },
                {
                  id: '170',
                  title: 'Reconveção',
                },
                {
                  id: '171',
                  title: 'Contra. ao Rec. Ord.',
                  description: 'Contrarrazões ao recurso ordinário',
                },
                {
                  id: '172',
                  title: 'Embargos a execução',
                },
                {
                  id: '173',
                  title: 'Réplica',
                },
                {
                  id: '174',
                  title: 'Contr. ao Rec. de R',
                  description: 'Contrarrazões ao recurso de revista',
                },
                {
                  id: '175',
                  title: 'Alegações Finais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoTributario(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Tributário*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '176',
                  title: 'Contestação',
                },
                {
                  id: '177',
                  title: 'Impug. à Contetação',
                  description: 'Impugnação à contestação',
                },
                {
                  id: '178',
                  title: 'Contr. Emb. de Dec.',
                  description: 'Contrarrazões aos embargos de declaração',
                },
                {
                  id: '179',
                  title: 'Contra. à Apelação',
                  description: 'Contrarrazões à apelação',
                },
                {
                  id: '180',
                  title: 'Alegações Finais',
                },
                {
                  id: '181',
                  title: 'Contr. Ag. de Instr.',
                  description: 'Contrarrazões ao agravo de instrumento',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoAdministrativo(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Administrativo*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '182',
                  title: 'Contestação',
                },
                {
                  id: '183',
                  title: 'Impug. à Contestação',
                },
                {
                  id: '184',
                  title: 'Contrar. Emb. de Decl.',
                  description: 'Contrarrazões aos embargos de declaração',
                },
                {
                  id: '185',
                  title: 'Contra. à Apelação',
                },
                {
                  id: '186',
                  title: 'Contra. Agr. de Ins.',
                  description: 'Contrarrazões ao agravo de instrumento',
                },
                {
                  id: '187',
                  title: 'Alegações Finais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
  async sendDireitoPrevidenciario(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Previdenciario*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '188',
                  title: 'Contestação',
                  description:
                    'Ação de concessão de aposentadoria por idade a segurado especial',
                },
                {
                  id: '189',
                  title: 'Impug. a Contestação',
                  description: 'Impugnação a contestação',
                },
                {
                  id: '190',
                  title: 'Contr. a Emb. de De',
                  description: 'Contrarrazões ao embargo de declaração',
                },
                {
                  id: '191',
                  title: 'Contr. à Apelação',
                  description: 'Contrarrazões a apelação',
                },
                {
                  id: '192',
                  title: 'Contr. ao A. Inst.',
                  description: 'Contrarrazões ao agravo de instrumento',
                },
                {
                  id: '193',
                  title: 'Alegações Finais',
                },
              ],
            },
          ],
        },
      },
    };
    try {
      const headers = {
        Authorization: auth,
        'Content-Type': 'application/json',
      };
      const response = await axios.post(url, message, { headers });
      return response.status === 200;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }
}
