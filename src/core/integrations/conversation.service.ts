import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ConversationService {
  async updateConversationInDb(id: number, thread_id: string) {
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
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async desactiveLastConversation(id: number) {
    if (!id) {
      throw new BadRequestException('conversation id is required');
    }
    const data = {
      isActive: false,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/${id}`;
    try {
      const response = await axios.put(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async createConversationInDb(assistant_id: string, userId: string) {
    console.log(assistant_id, userId);
    if (!assistant_id) {
      throw new BadRequestException('assistant_id is required');
    }
    const data = {
      userId,
      assistantId: assistant_id,
      isActive: true,
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

  async createMessage(data: any) {
    const payload = {
      type: data.type,
      value: data.value,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/message`;

    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async createConversationMessage(data: any) {
    const payload = {
      conversationId: data.conversationId,
      messageId: data.messageId,
      isInput: data.isInput,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/conversation-message`;

    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getConversationMessage(id: string) {
    if (!id) {
      throw new BadRequestException('id is required');
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = `https://datacore-production.up.railway.app/conversation/conversation-message/${id}`;

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async createNewMessageOpenAI(thread_id: string, message: string) {
    if (!thread_id) {
      throw new BadRequestException('thread_id is required');
    }
    if (!message) {
      throw new BadRequestException('message is required');
    }
    const data = {
      role: 'user',
      content: message,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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',
      'OpenAI-Beta': 'assistants=v2',
    };
    const url = `https://api.openai.com/v1/threads/${thread_id}/messages`;

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async runThread(thread_id: string, assistant_id: string) {
    if (!thread_id) {
      throw new BadRequestException('thread_id is required');
    }
    if (!assistant_id) {
      throw new BadRequestException('assistant_id is required');
    }
    const data = {
      assistant_id: assistant_id,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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',
      'OpenAI-Beta': 'assistants=v2',
    };
    const url = `https://api.openai.com/v1/threads/${thread_id}/runs`;
    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
