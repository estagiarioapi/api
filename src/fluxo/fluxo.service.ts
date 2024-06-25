import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FluxoService {
  constructor(private httpService: HttpService) { }

  async sendInteractiveMessage(phoneNumber: string): Promise<AxiosResponse<any>> {
    const message = {
      "recipient_type": "individual",
      "to": phoneNumber,
      "messaging_product": "whatsapp",
      "type": "interactive",
      "interactive": {
        "type": "list",
        "body": {
          "text": "Olá chefe, como posso te ajudar?"
        },
        "action": {
          "button": "Funcionalidades",
          "sections": [
            {
              "title": "",
              "rows": [
                {
                  "id": "1",
                  "title": "Auxiliar Jurídico"
                },
                {
                  "id": "2",
                  "title": "Notificação Extrajudicial"
                },
                {
                  "id": "3",
                  "title": "Peças Processuais"
                },
                {
                  "id": "4",
                  "title": "Contratos"
                }
              ]
            }
          ]
        }
      }
    };

    try {
      const url = 'https://graph.facebook.com/v19.0/374765715711006/messages';
      const headers = {
        'Authorization': 'Bearer EAARMCGe1MUcBOzNDrytFoDd0aad954W7PocOQa10C8cxGsB35ZBlx71Mt5Dmyl8PhCN68FffPOuAhrXIGQtZAAr8Q9Cf3fpOsoCtGah2ZBVHAU5n8aTVQCR3d9hTsQbccnBpKVVXYR7ZCOnrocsJIiBAIBAPayRqrRMGShoxYTHZBVeA6JJnnHcXjTwCZBe0dcOKuLVuHUKlI6JBsKI1sZD',
        'Content-Type': 'application/json'
      };
      const response = await firstValueFrom(
        this.httpService.post(url, message, { headers })
      );
      return response.data
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}
