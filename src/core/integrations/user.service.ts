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

  async updateUser(id: number, assistant_id: string) {
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
      console.log(response);
      return response.status === 200;
    } catch (error) {
      console.error(error);
    }
  }

  async updateConversation(id: number, thread_id: string) {
    if (!id) {
      throw new BadRequestException('conversation id is required');
    }
    const data = {
      threadId: thread_id,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/${id}`;
    try {
      const response = await axios.put(url, data, { headers });
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  async createConversationInDb(assistant_id: string, userId: string) {
    console.log(assistant_id, userId)
    if (!assistant_id) {
      throw new BadRequestException('assistant_id is required');
    }
    const data = {
      userId,
      assistantId: assistant_id,
      isActive: true
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = 'https://datacore-production.up.railway.app/conversation';

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async findOpenedConversation(user_id: string) {
    if (!user_id) {
      throw new BadRequestException('user_id is required');
    }

    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/opened/${user_id}`;

    try {
      const response = await axios.get(url, { headers });
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  }

  async createConversation(assistant_id: string, message: string) {
    if (!assistant_id) {
      throw new BadRequestException('assistant_id is required');
    }
    const data = {
      assistantId: assistant_id,
      message: message,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url =
      'https://krp4nuccozeckxq66no5x72ire0waiab.lambda-url.us-east-1.on.aws/';

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMessages(thread_id: string, tokens_count: number) {
    if (!thread_id) {
      throw new BadRequestException('thread_id is required');
    }
    const payload = {
      threadId: thread_id,
      tokens: 300,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url =
      'https://eytqilito555ozskhjp2p76auy0wfhtb.lambda-url.us-east-2.on.aws/';

    try {
      const response = await axios.post(url, payload, { headers });
      const data = {
        response: response.data.response,
        respostaGerada: response.data.isResult,
        tokens: response.data.tokens,
      };
      console.log('datafinal:', data)
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
