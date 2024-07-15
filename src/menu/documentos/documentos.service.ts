import axios from "axios";
import { ConversationService } from "src/core/integrations/conversation.service";
import FormData from 'form-data';
import { promises as fs } from 'fs';
import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "src/core/integrations/user.service";
import { ReplyService } from "src/core/replyes/reply.service";

@Injectable()
export class DocumentoService {
    constructor(private conversationService: ConversationService, private userService: UserService, private replyService: ReplyService) { }

    async processDocument(messageReceived, senderNumber) {
        const user = await this.userService.findUser(senderNumber);
        if (!user) {
            throw new BadRequestException('user not found in database');
        }
        const conversationOpened = await this.conversationService.findOpenedConversation(user.id);
        if (!conversationOpened) {
            throw new BadRequestException("você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.")
        }
        const documentId = messageReceived.document.id;
        const fileName = messageReceived.document.filename;

        const urlDownload = `https://graph.facebook.com/v14.0/${documentId}`;
        const documentResponse = await axios.get(urlDownload, {
            headers: { Authorization: 'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh' },
        });
        console.log('documentResponse', documentResponse)
        const documentData = documentResponse.data;
        const fileUrl = documentData.url;
        const fileResponse = await axios.get(fileUrl, {
            headers: { Authorization: 'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh' },
            responseType: 'arraybuffer',
        });
        console.log('fileResponse', fileResponse)

        const buffer = fileResponse.data;
        const filePath = `/tmp/${fileName}`;
        await fs.writeFile(filePath, Buffer.from(buffer));

        // Step 1: Upload the file to OpenAI and get the file_id
        let fileId
        try {
            console.log('filePath:', filePath, 'fileName:',)
            fileId = await this.uploadFileAndGetFileId(filePath, fileName);
        } catch (error) {
            console.log(error)
        }

        const message = {
            type: 'document',
            value: fileId,
        };

        const messageInDb = await this.conversationService.createMessage(message);

        const conversationMessage = {
            conversationId: conversationOpened.id,
            messageId: messageInDb.id,
            isInput: true,
        };

        await this.conversationService.createConversationMessage(conversationMessage);

        if (!conversationOpened.vectorStoreId) {
            // Step: Create a new Vector Store
            const newVectorStore = await this.createVectorStore(senderNumber)

            // Step: Alterar o vector store da conversa
            const updateConversation = await this.conversationService.updateVectorStoreInBd(conversationOpened.id, newVectorStore.id);
            await this.replyService.replyDocumentoRecebido(senderNumber)
        }

        const conversationOpenedUpdated = await this.conversationService.findOpenedConversation(user.id);
        const fileVectorStore = await this.addFileToVectorStore(fileId, conversationOpenedUpdated.vectorStoreId);
        console.log(conversationOpened)
        return { fileVectorStore, messageInDb };
    }

    async addFileToVectorStore(fileId: string, vectorStoreId: string) {
        const response = await axios.post(
            `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`,
            { file_id: fileId },
            {
                headers: {
                    Authorization: 'Bearer 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',
                    'Content-Type': 'application/json',
                    'OpenAI-Beta': 'assistants=v2',
                },
            },
        );

        const data = response.data;
        return data;
    }

    async createThreadAndGetMessage(message: string, sender: string) {
        const user = await this.userService.findUser(sender);
        if (!user) {
            throw new BadRequestException('user not found in database');
        }
        const conversationOpened = await this.conversationService.findOpenedConversation(user.id);
        if (!conversationOpened) {
            throw new BadRequestException("você precisa selecionar uma opção, ou se desejar voltar ao menu digite 'menu'.")
        }
        const messageUser = {
            type: 'text',
            value: message,
        };
        const messageInUserDb = await this.conversationService.createMessage(messageUser);

        // Cria uma conversa com a mensagem na base
        const conversationMessageUser = {
            conversationId: conversationOpened.id,
            messageId: messageInUserDb.id,
            isInput: true,
        };
        await this.conversationService.createConversationMessage(conversationMessageUser);
        const conversation = await this.conversationService.getConversationMessage(conversationOpened.id)
        console.log(conversation)
        const threadId = await this.createThreadWithFile(
            message,
            conversationOpened.vectorStoreId,
        );
        console.log('threadId:', threadId)

        const runId = await this.runThread(threadId, conversationOpened.assistantId);

        const threadUpdated = await this.conversationService.updateConversationInDb(
            conversationOpened.id,
            threadId,
        );

        let respostaGpt
        // Chama a função getMessages para conseguir a resposta que o bot retornou
        respostaGpt = await this.userService.getMessages(threadId);

        // Looping para tentar pegar a resposta caso a primeira tentativa falhe
        if (!respostaGpt) {
            let tentativa = 0;
            while (!respostaGpt && tentativa < 5) {
                tentativa++;
                respostaGpt = await this.userService.getMessages(threadId);
            }
        }

        const messageInput = {
            type: 'text',
            value: respostaGpt.data.response,
        };
        const messageInDb = await this.conversationService.createMessage(messageInput);
        const conversationMessage = {
            conversationId: conversationOpened.id,
            messageId: messageInDb.id,
            isInput: false,
        };
        await this.conversationService.createConversationMessage(conversationMessage);

        // Função que divide a mensagem caso exceda 3800 caracteres
        const splitMessage = (message, maxLength) => {
            let parts = [];
            while (message.length > maxLength) {
                let part = message.slice(0, maxLength);
                message = message.slice(maxLength);
                parts.push(part);
            }
            parts.push(message);
            return parts;
        };

        let answerGptResult = false;

        // Verifica se o tamanho da resposta excede 3800 caracteres e divide a mensagem se necessário
        if (respostaGpt.data.response.length > 3800) {
            const parts = splitMessage(respostaGpt.data.response, 3800);
            for (const part of parts) {
                answerGptResult = await this.replyService.replyAnswerGpt(sender, part);
            }
        } else {
            answerGptResult = await this.replyService.replyAnswerGpt(sender, respostaGpt.data.response);
        }

    }

    async createVectorStore(phoneNumber: string) {
        const url = 'https://api.openai.com/v1/vector_stores';

        const requestOptions = {
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            }
        };
        const body = {
            name: phoneNumber
        };
        try {
            const response = await axios.post(url, body, requestOptions);
            console.log('Vector Store created:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error creating Vector Store:', error);
        }
    }

    async createThreadWithFile(
        input: string,
        vectorStoreId: string
    ) {
        const response = await axios.post(
            'https://api.openai.com/v1/threads',
            {
                messages: [
                    {
                        role: 'user',
                        content: input
                    },
                ],
                tool_resources: {
                    file_search: { vector_store_ids: [vectorStoreId] },
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer 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',
                    'OpenAI-Beta': 'assistants=v2',
                },
            },
        );

        const data = response.data;
        return data.id;
    }

    async uploadFileAndGetFileId(filePath, fileName) {
        try {
            const fileBuffer = await fs.readFile(filePath);
            const form = new FormData();
            form.append('file', fileBuffer, { filename: fileName });
            form.append('purpose', 'assistants');

            const response = await axios.post('https://api.openai.com/v1/files', form, {
                headers: {
                    'Authorization': `Bearer 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`,
                    ...form.getHeaders(),
                },
            });

            console.log('response:', response.data);
            return response.data.id;
        } catch (error) {
            console.error('Failed to upload file:', error);
            throw error;  // Re-throw the error for further handling if needed
        }
    }

    async runThread(threadId: string, assistantId: string) {
        const response = await axios.post(
            `https://api.openai.com/v1/threads/${threadId}/runs`,
            { assistant_id: assistantId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer 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',
                    'OpenAI-Beta': 'assistants=v2',
                },
            },
        );

        const data = response.data;
        return data.id;
    }
}