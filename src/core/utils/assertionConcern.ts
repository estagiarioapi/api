import { AxiosResponse } from 'axios';

export class Assertion {
  static isNotNull(value: any, message: string) {
    if (value === null || value === undefined) {
      throw new Error(message);
    }
  }

  static responseIsSuccess(response: AxiosResponse) {
    if (response.status !== 200) {
      throw new Error(JSON.stringify(response));
    }
  }
}
