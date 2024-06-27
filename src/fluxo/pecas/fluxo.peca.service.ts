import { Injectable } from '@nestjs/common';
import axios from 'axios';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class FluxoPecaService {
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
                  id: '13',
                  title: 'Petição Inicial',
                },
                {
                  id: '14',
                  title: 'Petição Intermed.',
                },
                {
                  id: '15',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '16',
                  title: 'Petição Inicial',
                },
                {
                  id: '17',
                  title: 'Petição Intermed.',
                },
                {
                  id: '18',
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
          'Bearer EAARMCGe1MUcBO2khquDWAFbZAx7cwKGPbK96IlVIPFIUQXPvFNdwL9gIclSAzcyBcB0bxMtp0s1UWRTLtp1oxPSZAB7knwgKUVc2TSUVNMkGgwQrewZAYZAzdpq9bHrbcFHUZCNg9UR82oqNBNQYx5G20PHSWNA1LIQVLcECtYXgO100IQJsg96KA3tVnGepbH4HMYNc7uAgCqsrDI7wZD',
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
                  id: '19',
                  title: 'Petição Inicial',
                },
                {
                  id: '20',
                  title: 'Petição Intermed.',
                },
                {
                  id: '21',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '22',
                  title: 'Petição Inicial',
                },
                {
                  id: '23',
                  title: 'Petição Intermed.',
                },
                {
                  id: '24',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '25',
                  title: 'Petição Inicial',
                },
                {
                  id: '26',
                  title: 'Petição Intermed.',
                },
                {
                  id: '27',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '28',
                  title: 'Petição Inicial',
                },
                {
                  id: '29',
                  title: 'Petição Intermed.',
                },
                {
                  id: '30',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '31',
                  title: 'Petição Inicial',
                },
                {
                  id: '32',
                  title: 'Petição Intermed.',
                },
                {
                  id: '33',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
                  id: '34',
                  title: 'Petição Inicial',
                },
                {
                  id: '35',
                  title: 'Petição Intermed.',
                },
                {
                  id: '36',
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
          'Bearer EAARMCGe1MUcBO5JU9aM8jA7Dtw0fMfKRR1m1b8DfEX8wfu9iw2rE730Le4mdDDTxgn25rEcVcTApGwodCT7XzbBo9J9ZB4KVcBlcLxCcZBDlY9ZBSZAOhmyEau1cofcgkxAOmBW3uEEkSX2DsswSpi1PmunY5ZBzFYQbAB2BZBM0HLqcuvfYwP5jnOVIM02ySa3xR4m5LtJ595uXQpCeQZD',
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
