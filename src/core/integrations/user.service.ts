import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  async findUser(phone: string) {
    if (!phone) {
      throw new BadRequestException('phone is required');
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/user/${phone}`;
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(id: number, assistant_id: string, thread_id: string) {
    if (!assistant_id) {
      throw new BadRequestException('assistant_id is required');
    }
    const data = {
      assistant_id,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/user${id}`;
    try {
      const response = await axios.put(url, data, { headers });
      return response.status === 200;
    } catch (error) {
      console.error(error);
    }
  }

  async getMessages(thread_id: string) {
    if (!thread_id) {
      throw new BadRequestException('thread_id is required');
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/message/${thread_id}`;
    try {
      const response = await axios.get(url, { headers });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getLead(phone: string) {
    if (!phone) {
      throw new BadRequestException('phone is required');
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-development.up.railway.app/lead/AuthorizedPhone/${phone}`;
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
