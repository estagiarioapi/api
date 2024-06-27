import { Injectable } from "@nestjs/common";
import axios from "axios";
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

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
                    text: 'Você selecionou *Petição Irtermediária*, agora escolha a área do direito inserida na peça.',
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
                                    description: 'Impugnação à contestação'
                                },
                                {
                                    id: '146',
                                    title: 'Con. ao Emb. de Dec.',
                                    description: 'Contrarrazões aos embargos de declaração'
                                },
                                {
                                    id: '147',
                                    title: 'Contrar. à Apelação',
                                },
                                {
                                    id: '148',
                                    title: 'Cont Agra. De Instr.',
                                    description: 'Contrarrazões aos agravo de instrumento'
                                },
                                {
                                    id: '149',
                                    title: 'Desc. da Pers. Jur.',
                                    description: 'Incidente de desconsideração da personalidade jurídica'
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
                                    description: 'Impugnação à relações de credores'
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
                                    description: 'Contrarrazões aos Embargos de Declaração'
                                },
                                {
                                    id: '157',
                                    title: 'Contr. à Apelação',
                                    description: 'Contrarrazões à apelação'
                                },
                                {
                                    id: '158',
                                    title: 'Contr. Agr. de Instr',
                                    description: 'Contrarrazões ao Agravo de Instrumento'
                                },
                                {
                                    id: '159',
                                    title: 'Alegações Finais',
                                },
                                {
                                    id: '160',
                                    title: 'Inc. de Desc. da PJ',
                                    description: 'Incidente de Desconsideração da Personalidade Jurídica'
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
                    text: 'Você selecionou *Direito Constitucional*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
                },
                action: {
                    button: 'Petições Intermed.',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '162',
                                    title: 'Contestação',
                                },
                                {
                                    id: '163',
                                    title: 'Impug. à Contestação',
                                    description: 'Impugnação à contestação'
                                },
                                {
                                    id: '164',
                                    title: 'Contra. Emb. de Dec.',
                                    description: 'Contrarrazões aos embargos de declaração'
                                },
                                {
                                    id: '165',
                                    title: 'Contrar. à Apelação',
                                },
                                {
                                    id: '166',
                                    title: 'Contrar. a de Inst.',
                                    description: 'Contrarrazões ao agravo de instrumento'
                                },
                                {
                                    id: '167',
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
                    button: 'Petições Intermed',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '167',
                                    title: 'Contestação',
                                },
                                {
                                    id: '168',
                                    title: 'Reconveção',
                                },
                                {
                                    id: '169',
                                    title: 'Contra. ao Rec. Ord.',
                                    description: 'Contrarrazões ao recurso ordinário'
                                },
                                {
                                    id: '170',
                                    title: 'Embargos a execução',
                                },
                                {
                                    id: '171',
                                    title: 'Réplica',
                                },
                                {
                                    id: '172',
                                    title: 'Contr. ao Rec. de R',
                                    description: 'Contrarrazões ao recurso de revista'
                                },
                                {
                                    id: '173',
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
                                    id: '174',
                                    title: 'Contestação',
                                },
                                {
                                    id: '175',
                                    title: 'Impug. à Contetação',
                                    description: 'Impugnação à contestação'
                                },
                                {
                                    id: '176',
                                    title: 'Contr. Emb. de Dec.',
                                    description: 'Contrarrazões aos embargos de declaração'
                                },
                                {
                                    id: '177',
                                    title: 'Contra. à Apelação',
                                    description: 'Contrarrazões à apelação'
                                },
                                {
                                    id: '178',
                                    title: 'Alegações Finais',
                                },
                                {
                                    id: '179',
                                    title: 'Contr. Ag. de Instr.',
                                    description: 'Contrarrazões ao agravo de instrumento'
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
                    text: 'Você selecionou *Direito Administrativo*, agora me indique se deseja uma petição inicial, uma petição intermediária ou um recurso.',
                },
                action: {
                    button: 'Petições',
                    sections: [
                        {
                            title: '',
                            rows: [
                                {
                                    id: '180',
                                    title: 'Contestação',
                                },
                                {
                                    id: '181',
                                    title: 'Impug. à Contestação',
                                },
                                {
                                    id: '182',
                                    title: 'Contrar. Emb. de Decl.',
                                    description: 'Contrarrazões aos embargos de declaração'
                                },
                                {
                                    id: '183',
                                    title: 'Contra. à Apelação',
                                },
                                {
                                    id: '184',
                                    title: 'Contra. Agr. de Ins.',
                                    description: 'Contrarrazões ao agravo de instrumento'
                                },
                                {
                                    id: '185',
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
                                    id: '186',
                                    title: 'Contestação',
                                    description: 'Ação de concessão de aposentadoria por idade a segurado especial'
                                },
                                {
                                    id: '187',
                                    title: 'Impug. a Contestação',
                                    description: 'Impugnação a contestação'
                                },
                                {
                                    id: '188',
                                    title: 'Contr. a Emb. de De',
                                    description: 'Contrarrazões ao embargo de declaração'
                                },
                                {
                                    id: '189',
                                    title: 'Contr. à Apelação',
                                    description: 'Contrarrazões a apelação'
                                },
                                {
                                    id: '190',
                                    title: 'Contr. ao A. Inst.',
                                    description: 'Contrarrazões ao agravo de instrumento'
                                },
                                {
                                    id: '191',
                                    title: 'Alegações Finais',
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