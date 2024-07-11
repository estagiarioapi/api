import { Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class RecursoService {
  constructor() {}
  async sendDireitoCivil(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '194',
                  title: 'Apelação',
                },
                {
                  id: '195',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '196',
                  title: 'Agravo Interno',
                },
                {
                  id: '197',
                  title: 'Embargos de Decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '198',
                  title: 'Recurso ordinário',
                },
                {
                  id: '199',
                  title: 'Recurso especial',
                },
                {
                  id: '200',
                  title: 'Recurso Extraord.',
                  description: 'Recurso extraordinário',
                },
                {
                  id: '201',
                  title: 'Agravo Rec. Esp/Ext',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '202',
                  title: 'Embargos de Div.',
                  description: 'Embargos de divergência',
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
  async sendDireitoEmpresarial(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '203',
                  title: 'Apelação',
                },
                {
                  id: '204',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '205',
                  title: 'Agravo Interno',
                },
                {
                  id: '206',
                  title: 'Embargos de Decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '207',
                  title: 'Recurso Extraordinário',
                  description: 'Contrarrazões aos embargos de declaração',
                },
                {
                  id: '208',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '208',
                  title: 'Agravo Rec. Esp/Ext',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '209',
                  title: 'Embargos de Div.',
                  description: 'Embargos de divergência',
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
  async sendDireitoPenal(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '210',
                  title: 'Apelação',
                },
                {
                  id: '211',
                  title: 'Rec. em Sent. Est.',
                  description: 'Recurso em sentido estrito',
                },
                {
                  id: '212',
                  title: 'Agravo em execução',
                },
                {
                  id: '213',
                  title: 'Rec. Ord. Constit.',
                  description: 'Recurso ordinário constitucional',
                },
                {
                  id: '214',
                  title: 'Recurso Especial',
                },
                {
                  id: '215',
                  title: 'Recurso Ext.',
                  description: 'Recurso extraordinário',
                },
                {
                  id: '216',
                  title: 'Carta Testemunhável',
                },
                {
                  id: '217',
                  title: 'Embargos de Decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '218',
                  title: 'Embargos Infr.',
                  description: 'Embargos Infringentes',
                },
                {
                  id: '219',
                  title: 'Contra Rec. de Ap.',
                  description: 'Contrarrazões ao recurso de apelação',
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
  async sendDireitoConstitucional(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '220',
                  title: 'Apelação',
                },
                {
                  id: '221',
                  title: 'Agravo de instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '222',
                  title: 'Agravo interno',
                },
                {
                  id: '223',
                  title: 'Embargos de decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '224',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '225',
                  title: 'Recurso Especial',
                },
                {
                  id: '226',
                  title: 'Recurso Extraord.',
                  description: 'Recurso extraordinário',
                },
                {
                  id: '227',
                  title: 'Agravo Rec. Esp/Ext',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '228',
                  title: 'Embargos de Divergência',
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
  async sendDireitoDoTrabalho(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '229',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '230',
                  title: 'Agravo de Petição',
                },
                {
                  id: '231',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de Instrumento',
                },
                {
                  id: '232',
                  title: 'Recurso de Revista',
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
  async sendDireitoTributario(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '233',
                  title: 'Apelação',
                },
                {
                  id: '234',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '235',
                  title: 'Agravo Interno',
                },
                {
                  id: '236',
                  title: 'Embargos de Decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '237',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '238',
                  title: 'Recurso Especial',
                },
                {
                  id: '239',
                  title: 'Recurso Extraord.',
                  description: 'Recurso extraordinário',
                },
                {
                  id: '240',
                  title: 'Agravo Rec Esp/Ext',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '241',
                  title: 'Embargos de Div.',
                  description: 'Embargos de divergência',
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
  async sendDireitoAdministrativo(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '242',
                  title: 'Apelação',
                },
                {
                  id: '243',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '244',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '245',
                  title: 'Agravo Interno',
                },
                {
                  id: '246',
                  title: 'Recurso Ext.',
                  description: 'Recurso extraordináro',
                },
                {
                  id: '247',
                  title: 'Recurso Especial',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '248',
                  title: 'Recurso Especial',
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
  async sendDireitoPrevidenciario(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
        },
        action: {
          button: 'Recursos',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '249',
                  title: 'Apelação',
                },
                {
                  id: '250',
                  title: 'Agravo de Instr.',
                  description: 'Agravo de instrumento',
                },
                {
                  id: '251',
                  title: 'Agravo Interno',
                },
                {
                  id: '252',
                  title: 'Embargos de Decl.',
                  description: 'Embargos de declaração',
                },
                {
                  id: '253',
                  title: 'Recurso Ordinário',
                },
                {
                  id: '254',
                  title: 'Recurso Especial',
                },
                {
                  id: '255',
                  title: 'Recurso Extraord.',
                  description: 'Recurso extraordinário',
                },
                {
                  id: '256',
                  title: 'A. em Rec. E. / Ext.',
                  description: 'Agravo em recurso especial ou extraordinário',
                },
                {
                  id: '257',
                  title: 'Embargos de Diverg.',
                  description: 'Embargos de divergência',
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
}
