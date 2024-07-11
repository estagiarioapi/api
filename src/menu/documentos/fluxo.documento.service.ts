import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConversationService } from 'src/core/integrations/conversation.service';
import { UserService } from 'src/core/integrations/user.service';
const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';

@Injectable()
export class FluxoDocumentoService {
  constructor(private conversationService: ConversationService, private userService: UserService) { }
  async sendExtrairInformacoes(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const assistant_id = 'asst_Hv2WQuoOA4ncLSbysZBCoTkc';
    const messages = [
      {
        text: 'Você selecionou a opção de *Extrair informações de documentos.* Nessa funcionalidade, você deverá *enviar um documento e aguardar a minha confirmação de leitura.* Após a confirmação, poderei responder a questionamentos a respeito das informações que constam no documento.',
      },
      {
        text: '*Envie seu documento!*',
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

  async sendResumirDocumentos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const assistant_id = 'asst_Hv2WQuoOA4ncLSbysZBCoTkc';
    const messages = [
      {
        text: 'Você selecionou a opção de *resumir documentos.* Nessa funcionalidade, você deverá *enviar um documento e aguardar que eu gere o resumo.* Não é necessário enviar uma mensagem após o envio do arquivo; automaticamente produzirei um resumo selecionando as informações principais do documento enviado.',
      },
      {
        text: '*Envie seu documento!*',
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

  async sendAnalisarDocumentos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const assistant_id = 'asst_Hv2WQuoOA4ncLSbysZBCoTkc';
    const messages = [
      {
        text: 'Você selecionou a opção de *analisar documentos.* Nessa funcionalidade, você deverá *enviar um documento e aguardar a minha confirmação de leitura.* Não é necessário enviar uma mensagem após o envio do arquivo; automaticamente produzirei a análise do conteúdo, considerando os pontos fortes e fracos contidos no documento.',
      },
      {
        text: '*Envie seu documento!*',
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

  async sendCompararDocumentos(phoneNumber: string) {
    if (!phoneNumber) {
      throw new BadRequestException('Favor fornecer o numero do usuário');
    }
    const user = await this.userService.findUser(phoneNumber);
    console.log(user);
    if (!user) {
      throw new BadRequestException('user out of database');
    }
    const assistant_id = 'asst_Hv2WQuoOA4ncLSbysZBCoTkc';
    const messages = [
      {
        text: 'Você selecionou a opção de *comparar documentos.* Nessa funcionalidade, você deverá *enviar os dois documentos e aguardar minha confirmação de leitura.* Após a confirmação, você poderá me informar o que deseja que eu compare entre os documentos, como, por exemplo: quais são as teses defendidas em cada petição? Quais cláusulas estão sendo confrontadas entre si? Entre outros questionamentos..',
      },
      {
        text: '*Envie seu documento!*',
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

  async sendCadaFluxo(menuId: string, phoneNumber: string) {
    switch (menuId) {
      case '1010':
        return this.sendExtrairInformacoes(phoneNumber);
      case '1011':
        return this.sendResumirDocumentos(phoneNumber);
      case '1012':
        return this.sendAnalisarDocumentos(phoneNumber);
      case '1013':
        return this.sendCompararDocumentos(phoneNumber);
    }
  }
}
