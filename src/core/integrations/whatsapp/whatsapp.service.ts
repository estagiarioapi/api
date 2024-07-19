import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { wppApi } from 'src/lib/axios';

@Injectable()
export class WhatsappService {
  private readonly wppApi = wppApi;

  async sendMessage(phoneNumber: string, message: string | string[]) {
    return await this.sendMessageMessages(phoneNumber, message);
  }

  async sendCustomMessage<T = any>(phoneNumber: string, body: T) {
    return await this.sendMessageMessages(phoneNumber, body);
  }

  async sendMessagesWithTimeout<T = any>(
    phoneNumber: string,
    body: T[],
    timeout: number,
  ): Promise<AxiosResponse<any, any>[]> {
    return (await this.sendMessageMessages(
      phoneNumber,
      body,
      timeout,
    )) as AxiosResponse<any, any>[];
  }

  private async sendMessageMessages<T = any>(
    phoneNumber: string,
    body: T,
    timeout?: number,
  ) {
    if (Array.isArray(body)) {
      return timeout
        ? await Promise.all(
            body.map((message, index) => {
              return new Promise((resolve) => {
                setTimeout(async () => {
                  resolve(await this.sendMessageInternal(phoneNumber, message));
                }, timeout * index);
              });
            }),
          )
        : await Promise.all(
            body.map((message) => {
              return this.sendMessageInternal(phoneNumber, message);
            }),
          );
    }

    return await this.sendMessageInternal(phoneNumber, body);
  }

  private identityMessage(phoneNumber: string, body: unknown) {
    const payload =
      typeof body === 'string'
        ? {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: phoneNumber,
            type: 'text',
            text: {
              body,
            },
          }
        : {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: phoneNumber,
            ...(body as any),
          };
    return payload;
  }

  private async sendMessageInternal(
    phone: string,
    payload: any,
  ): Promise<AxiosResponse<any, any>> {
    return await wppApi
      .post('/messages', this.identityMessage(phone, payload))
      .then((response) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error.response.data);
        return error.response;
      });
  }
}
