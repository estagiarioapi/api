import { Injectable } from "@nestjs/common";
import axios from "axios";
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class RecursoService {
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '192',
                                    title: 'Apelação',
                                },
                                {
                                    id: '193',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '194',
                                    title: 'Agravo Interno',
                                },
                                {
                                    id: '195',
                                    title: 'Embargos de Decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '196',
                                    title: 'Recurso ordinário',
                                },
                                {
                                    id: '197',
                                    title: 'Recurso especial',
                                },
                                {
                                    id: '198',
                                    title: 'Recurso Extraord.',
                                    description: 'Recurso extraordinário'
                                },
                                {
                                    id: '199',
                                    title: 'Agravo Rec. Esp/Ext',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '200',
                                    title: 'Embargos de Div.',
                                    description: 'Embargos de divergência'
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '201',
                                    title: 'Apelação',
                                },
                                {
                                    id: '202',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '203',
                                    title: 'Agravo Interno',
                                },
                                {
                                    id: '204',
                                    title: 'Embargos de Decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '205',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '206',
                                    title: 'Recurso Extraordinário',
                                    description: 'Contrarrazões aos embargos de declaração'
                                },
                                {
                                    id: '207',
                                    title: 'Agravo Rec. Esp/Ext',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '208',
                                    title: 'Embargos de Div.',
                                    description: 'Embargos de divergência'
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '209',
                                    title: 'Apelação',
                                },
                                {
                                    id: '210',
                                    title: 'Rec. em Sent. Est.',
                                    description: 'Recurso em sentido estrito'
                                },
                                {
                                    id: '211',
                                    title: 'Agravo em execução',
                                },
                                {
                                    id: '212',
                                    title: 'Rec. Ord. Constit.',
                                    description: 'Recurso ordinário constitucional'
                                },
                                {
                                    id: '213',
                                    title: 'Recurso Especial',
                                },
                                {
                                    id: '214',
                                    title: 'Recurso Ext.',
                                    description: 'Recurso extraordinário'
                                },
                                {
                                    id: '215',
                                    title: 'Carta Testemunhável',
                                },
                                {
                                    id: '216',
                                    title: 'Embargos de Decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '217',
                                    title: 'Embargos Infr.',
                                    description: 'Embargos Infringentes'
                                },
                                {
                                    id: '218',
                                    title: 'Contra Rec. de Ap.',
                                    description: 'Contrarrazões ao recurso de apelação'
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '219',
                                    title: 'Apelação',
                                },
                                {
                                    id: '220',
                                    title: 'Agravo de instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '221',
                                    title: 'Agravo interno',
                                },
                                {
                                    id: '222',
                                    title: 'Embargos de decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '223',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '224',
                                    title: 'Recurso Especial',
                                },
                                {
                                    id: '225',
                                    title: 'Recurso Extraord.',
                                    description: 'Recurso extraordinário'
                                },
                                {
                                    id: '226',
                                    title: 'Agravo Rec. Esp/Ext',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '227',
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '228',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '229',
                                    title: 'Agravo de Petição',
                                },
                                {
                                    id: '230',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de Instrumento'
                                },
                                {
                                    id: '231',
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
                    text: 'Você selecionou *Recursos*, agora escolha a área do direito inserida na peça.',
                },
                action: {
                    button: 'Recursos',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '232',
                                    title: 'Apelação',
                                },
                                {
                                    id: '233',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '234',
                                    title: 'Agravo Interno',
                                },
                                {
                                    id: '235',
                                    title: 'Embargos de Decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '236',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '237',
                                    title: 'Recurso Especial',
                                },
                                {
                                    id: '238',
                                    title: 'Recurso Extraord.',
                                    description: 'Recurso extraordinário'
                                },
                                {
                                    id: '239',
                                    title: 'Agravo Rec Esp/Ext',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '240',
                                    title: 'Embargos de Div.',
                                    description: 'Embargos de divergência'
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
                                    id: '232',
                                    title: 'Apelação',
                                },
                                {
                                    id: '233',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '234',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '235',
                                    title: 'Agravo Interno',
                                },
                                {
                                    id: '236',
                                    title: 'Recurso Ext.',
                                    description: 'Recurso extraordináro'
                                },
                                {
                                    id: '237',
                                    title: 'Recurso Especial',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '238',
                                    title: 'RecursoEspecial',
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
                                    id: '239',
                                    title: 'Apelação',
                                },
                                {
                                    id: '240',
                                    title: 'Agravo de Instr.',
                                    description: 'Agravo de instrumento'
                                },
                                {
                                    id: '241',
                                    title: 'Agravo Interno',
                                },
                                {
                                    id: '242',
                                    title: 'Embargos de Decl.',
                                    description: 'Embargos de declaração'
                                },
                                {
                                    id: '243',
                                    title: 'Recurso Ordinário',
                                },
                                {
                                    id: '244',
                                    title: 'Recurso Especial',
                                },
                                {
                                    id: '245',
                                    title: 'Recurso Extraord.',
                                    description: 'Recurso extraordinário'
                                },
                                {
                                    id: '246',
                                    title: 'A. em Rec. E. / Ext.',
                                    description: 'Agravo em recurso especial ou extraordinário'
                                },
                                {
                                    id: '247',
                                    title: 'Embargos de Diverg.',
                                    description: 'Embargos de divergência'
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