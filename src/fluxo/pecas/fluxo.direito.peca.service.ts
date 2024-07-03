import { Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class FluxoDireitoPecaService {
  constructor() {}
  async sendPecaDireitoCivil(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Civil*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '62',
                  title: 'Petição Inicial',
                },
                {
                  id: '63',
                  title: 'Petição Intermed.',
                },
                {
                  id: '64',
                  title: 'Recursos',
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
  async sendPecaDireitoEmpresarial(phoneNumber: string) {
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
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '65',
                  title: 'Petição Inicial',
                },
                {
                  id: '66',
                  title: 'Petição Intermed.',
                },
                {
                  id: '67',
                  title: 'Recursos',
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
  async sendPecaDireitoPenal(phoneNumber: string) {
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
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '68',
                  title: 'Petição Inicial',
                },
                {
                  id: '69',
                  title: 'Petição Intermed.',
                },
                {
                  id: '70',
                  title: 'Recursos',
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
  async sendPecaDireitoConstitucional(phoneNumber: string) {
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
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '71',
                  title: 'Petição Inicial',
                },
                {
                  id: '72',
                  title: 'Petição Intermed.',
                },
                {
                  id: '73',
                  title: 'Recursos',
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
  async sendPecaDireitoDoTrabalho(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Do Trabalho*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '74',
                  title: 'Petição Inicial',
                },
                {
                  id: '75',
                  title: 'Petição Intermed.',
                },
                {
                  id: '76',
                  title: 'Recursos',
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
  async sendPecaDireitoTributario(phoneNumber: string) {
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
                  id: '77',
                  title: 'Petição Inicial',
                },
                {
                  id: '78',
                  title: 'Petição Intermed.',
                },
                {
                  id: '79',
                  title: 'Recursos',
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
  async sendPecaDireitoAdministrativo(phoneNumber: string) {
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
                  id: '80',
                  title: 'Petição Inicial',
                },
                {
                  id: '81',
                  title: 'Petição Intermed.',
                },
                {
                  id: '82',
                  title: 'Recursos',
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
  async sendPecaDireitoPrevidenciario(phoneNumber: string) {
    const message = {
      recipient_type: 'individual',
      to: phoneNumber,
      messaging_product: 'whatsapp',
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: 'Você selecionou *Direito Previdenciário*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
        },
        action: {
          button: 'Petições',
          sections: [
            {
              title: '',
              rows: [
                {
                  id: '83',
                  title: 'Petição Inicial',
                },
                {
                  id: '84',
                  title: 'Petição Intermed.',
                },
                {
                  id: '840',
                  title: 'Recursos',
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
