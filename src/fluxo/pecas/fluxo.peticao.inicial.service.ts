import { Injectable } from "@nestjs/common";
import axios from "axios";
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class PeticaoInicialService {
    constructor() { }
    async sendDireitoCivil(phoneNumber: string) {
        const message = {
            recipient_type: 'individual',
            to: phoneNumber,
            messaging_product: 'whatsapp',
            type: 'interactive',
            interactive: {
                type: 'list',
                body: {
                    text: 'Você selecionou *Petição Inicial*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Petições',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '85',
                                    title: 'Ação de Alimentos',
                                },
                                {
                                    id: '86',
                                    title: 'Ação Indenizatória',
                                },
                                {
                                    id: '87',
                                    title: 'Ação Monitória',
                                },
                                {
                                    id: '88',
                                    title: 'Conh. Ante de Tutela',
                                    description: 'Ação de conhecimento com pedido de antecipação de tutela'
                                },
                                {
                                    id: '89',
                                    title: 'Execução por Quant.',
                                    description: 'Ação de execução por quantia certa'
                                },
                                {
                                    id: '90',
                                    title: 'Ação de Despejo',
                                },
                                {
                                    id: '91',
                                    title: 'Ação de Cobrança',
                                },
                                {
                                    id: '92',
                                    title: 'Decl. I. de Débito',
                                    description: 'Declaratória de inexistência de débito com obrigação de fazer e ind dan.'
                                },
                                {
                                    id: '93',
                                    title: 'Ação de Ob. de Fazer',
                                    description: 'Ação de obrigação de fazer'
                                },
                                {
                                    id: '94',
                                    title: 'Petição Inicial',
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
                    button: 'Petições',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '95',
                                    title: 'Exe por Quant. Certa',
                                    description: 'Ação de execução por quantia certa'
                                },
                                {
                                    id: '96',
                                    title: 'Dissolução Parcial',
                                    description: 'Ação de dissolução parcial'
                                },
                                {
                                    id: '97',
                                    title: 'Ação Renovatória',
                                },
                                {
                                    id: '98',
                                    title: 'Res. de Sociedade',
                                    description: 'Resolução de sociedade'
                                },
                                {
                                    id: '99',
                                    title: 'Ação Monitória',
                                },
                                {
                                    id: '100',
                                    title: 'Obr. de Não Fazer',
                                    description: 'Obrigação de não fazer'
                                },
                                {
                                    id: '101',
                                    title: 'Petição Inicial',
                                    description: 'Petição inicial de cancelamento de protesto'
                                },
                                {
                                    id: '102',
                                    title: 'Ação de Restituição',
                                },
                                {
                                    id: '103',
                                    title: 'Ação Revocatória',
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
                    button: 'Petições',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '104',
                                    title: 'Queixa-Crime',
                                },
                                {
                                    id: '105',
                                    title: 'Habeas Corpus',
                                },
                                {
                                    id: '106',
                                    title: 'Revisão Criminal',
                                },
                                {
                                    id: '107',
                                    title: 'Relax. de Prisão',
                                    description: 'Petição de relaxamento de prisão'
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
    async sendDireitoConstitucional(phoneNumber: string) {
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
                                    id: '108',
                                    title: 'Mandado de Segurança',
                                },
                                {
                                    id: '109',
                                    title: 'Ação Popular',
                                },
                                {
                                    id: '110',
                                    title: 'M. de Injunção Col.',
                                    description: 'Mandado de Injunção Coletivo'
                                },
                                {
                                    id: '111',
                                    title: 'Ação Civil Pública',
                                },
                                {
                                    id: '112',
                                    title: 'Habeas Data',
                                },
                                {
                                    id: '113',
                                    title: 'M. de Segurança Col',
                                    description: 'Mandado de Segurança Coletivo'
                                },
                                {
                                    id: '114',
                                    title: 'Reclamação Consti.',
                                    description: 'Reclamação Constitucional'
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
                    button: 'Petições',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '115',
                                    title: 'Recl. Trabalhista',
                                    description: 'Reclamatória trabalhista'
                                },
                                {
                                    id: '116',
                                    title: 'Consig. em Pagamento',
                                    description: 'Consignação em pagamento'
                                },
                                {
                                    id: '117',
                                    title: 'Petição - H de A. T.',
                                    description: 'Petição - Homologação de acordo trabalhista'
                                },
                                {
                                    id: '118',
                                    title: 'Mandado de segurança',
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
                                    id: '119',
                                    title: 'Mandado de segurança',
                                },
                                {
                                    id: '120',
                                    title: 'Rep. de indébito',
                                    description: 'Ação de repetição de indébito'
                                },
                                {
                                    id: '121',
                                    title: 'Ação Anulatória',
                                },
                                {
                                    id: '122',
                                    title: 'Exceção de Pré-Exec.',
                                    description: 'Exceção de pré-executividade'
                                },
                                {
                                    id: '123',
                                    title: 'Inexis. de Rel. Jur.',
                                    description: 'Ação declaratória de inexistência de relação jurídica'
                                },
                                {
                                    id: '124',
                                    title: 'Ação de Rep. Ind.',
                                    description: 'Ação declaratória com ação de repetição de indébito'
                                },
                                {
                                    id: '125',
                                    title: 'Emb. à Exe. Fiscal',
                                    description: 'Embargos à execução'
                                }
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
                                    id: '126',
                                    title: 'Ação Ordinária',
                                },
                                {
                                    id: '127',
                                    title: 'Mandado de Segurança',
                                },
                                {
                                    id: '128',
                                    title: 'Ação Popular',
                                },
                                {
                                    id: '129',
                                    title: 'Ação Anulatória',
                                },
                                {
                                    id: '130',
                                    title: 'Ação Civil Pública',
                                    description: 'Ação declaratória de inexistência de relação jurídica'
                                },
                                {
                                    id: '131',
                                    title: 'Ação de Res. Ind.',
                                    description: 'Ação de responsabilidade civil'
                                },
                                {
                                    id: '132',
                                    title: 'Ação de De. Direta',
                                    description: 'Ação de desapropriação direta'
                                }
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
                                    id: '133',
                                    title: 'Concessão de Aposen.',
                                    description: 'Ação de concessão de aposentadoria por idade a segurado especial'
                                },
                                {
                                    id: '134',
                                    title: 'Conce. de Apo. Esp',
                                    description: 'Concessão de aposentadoria especial'
                                },
                                {
                                    id: '135',
                                    title: 'Conc. de Apo. Idade',
                                    description: 'Concessão de aposentadoria por idade'
                                },
                                {
                                    id: '136',
                                    title: 'C. de Tempo de S. E.',
                                    description: 'Conversão de tempo de serviço especial em comum'
                                },
                                {
                                    id: '137',
                                    title: 'Apose. por Invalidez',
                                    description: 'Aposentadoria por invalidez'
                                },
                                {
                                    id: '138',
                                    title: 'C. de Auxílio Doença',
                                    description: 'Concessão de auxílio doença'
                                },
                                {
                                    id: '139',
                                    title: 'Amparo Social',
                                    description: 'Benefício assistencial a idoso'
                                },
                                {
                                    id: '140',
                                    title: 'C. do Salário Mater.',
                                    description: 'Concessão do salário-materninade'
                                },
                                {
                                    id: '141',
                                    title: 'C. do Aux. Acidente',
                                    description: 'Concessão do auxílio-acidente.'
                                }
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