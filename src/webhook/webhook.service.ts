import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { promises as fs } from 'fs';

const existingAssistantId = 'asst_k3hihCq0BbmquqRptSf8J858';
const existingVectorStoreId = 'vs_VkV662jbqd9Rigx9SQIB3hdA';
const access_token =
  'Bearer EAARMCGe1MUcBOzNDrytFoDd0aad954W7PocOQa10C8cxGsB35ZBlx71Mt5Dmyl8PhCN68FffPOuAhrXIGQtZAAr8Q9Cf3fpOsoCtGah2ZBVHAU5n8aTVQCR3d9hTsQbccnBpKVVXYR7ZCOnrocsJIiBAIBAPayRqrRMGShoxYTHZBVeA6JJnnHcXjTwCZBe0dcOKuLVuHUKlI6JBsKI1sZD';
const openai_key =
  'Bearer sk-proj-Az96Q8yXAonC8lEBq0mLT3BlbkFJcWClrLaidIdCQYJiBpZA';

@Injectable()
export class WebhookService {
  constructor(private readonly httpService: HttpService) {}

  async processMessage(event: any): Promise<any> {
    try {
      const body = JSON.parse(event.body);
      const message = body.entry[0].changes[0].value.messages[0];
      const senderNumber = message.from;

      if (message.document) {
        const { threadId, runId, sender } = await this.processDocument(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Document processed and sent successfully',
            thread_id: threadId,
            run_id: runId,
            sender_number: sender,
          }),
        };
      } else if (message.audio) {
        const { transcript, sender } = await this.processAudio(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Audio processed and transcribed successfully',
            transcript: transcript,
            sender_number: sender,
          }),
        };
      } else if (message.text) {
        const { responseMessage, sender } = await this.processText(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Text message processed successfully',
            response_message: responseMessage,
            sender_number: sender,
          }),
        };
      } else {
        throw new Error('Unsupported message type');
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error processing message',
          error: error.message,
        }),
      };
    }
  }

  async processText(message: any, sender: string) {
    const text = message.text.body;

    // Implement your logic to process the text message here.
    // For demonstration purposes, let's just echo the message.
    const responseMessage = `Received your message: "${text}"`;

    return { responseMessage, sender };
  }

  async uploadFileAndGetFileId(filePath: string, fileName: string) {
    const fileBuffer = await fs.readFile(filePath);
    const form = new FormData();
    form.append('file', fileBuffer, {
      filename: fileName,
      contentType:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    form.append('purpose', 'assistants');

    const response = await axios.post('https://api.openai.com/v1/files', form, {
      headers: {
        Authorization: openai_key,
        'OpenAI-Beta': 'assistants=v2',
        ...form.getHeaders(),
      },
    });

    const data = response.data;
    return data.id;
  }

  async addFileToVectorStore(fileId: string, vectorStoreId: string) {
    const response = await axios.post(
      `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`,
      { file_id: fileId },
      {
        headers: {
          Authorization: openai_key,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data;
  }

  async createThreadWithFile(
    fileId: string,
    userMessage: string,
    vectorStoreId: string,
  ) {
    const response = await axios.post(
      'https://api.openai.com/v1/threads',
      {
        messages: [
          {
            role: 'user',
            content: userMessage,
            attachments: [
              { file_id: fileId, tools: [{ type: 'file_search' }] },
            ],
          },
        ],
        tool_resources: {
          file_search: { vector_store_ids: [vectorStoreId] },
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: openai_key,
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data.id;
  }

  async runThread(threadId: string, assistantId: string) {
    const response = await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/runs`,
      { assistant_id: assistantId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: openai_key,
          'OpenAI-Beta': 'assistants=v2',
        },
      },
    );

    const data = response.data;
    return data.id;
  }

  async transcribeAudio(filePath: string, fileName: string) {
    const fileBuffer = await fs.readFile(filePath);
    const form = new FormData();
    form.append('file', fileBuffer, {
      filename: fileName,
      contentType: 'audio/mpeg',
    });
    form.append('model', 'whisper-1');
    const response = await axios.post(
      'https://api.openai.com/v1/audio/transcriptions',
      form,
      {
        headers: {
          Authorization: openai_key,
          ...form.getHeaders(),
        },
      },
    );

    const data = response.data;
    return data.text;
  }

  async processDocument(message: any, sender: string) {
    try {
      const documentId = message.document.id;
      const fileName = message.document.filename;
      const mimeType = message.document.mime_type;
      if (
        mimeType !==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        throw new Error(
          `Unsupported file type: ${mimeType}. Only DOCX files are supported.`,
        );
      }

      const urlDownload = `https://graph.facebook.com/v14.0/${documentId}`;
      const documentResponse = await axios.get(urlDownload, {
        headers: { Authorization: access_token },
      });
      const documentData = documentResponse.data;
      const fileUrl = documentData.url;
      const fileResponse = await axios.get(fileUrl, {
        headers: { Authorization: access_token },
        responseType: 'arraybuffer',
      });

      const buffer = fileResponse.data;
      const filePath = `/tmp/${fileName}`;
      await fs.writeFile(filePath, Buffer.from(buffer));

      // Step 1: Upload the file to OpenAI and get the file_id
      const fileId = await this.uploadFileAndGetFileId(filePath, fileName);

      // Step 2: Add the file to the existing vector store
      await this.addFileToVectorStore(fileId, existingVectorStoreId);

      // Step 3: Create a thread with the file attached
      const threadId = await this.createThreadWithFile(
        fileId,
        'Please analyze the document.',
        existingVectorStoreId,
      );

      // Step 4: Run the thread
      const runId = await this.runThread(threadId, existingAssistantId);

      return { threadId, runId, sender };
    } catch (error) {
      console.error(error);
    }
  }

  async processAudio(message: any, sender: string) {
    const audioId = message.audio.id;
    const fileName = `${audioId}.mp3`;
    const mimeType = message.audio.mime_type;

    const urlDownload = `https://graph.facebook.com/v14.0/${audioId}`;
    const audioResponse = await axios.get(urlDownload, {
      headers: {
        Authorization:
          'Bearer EAARMCGe1MUcBOzNDrytFoDd0aad954W7PocOQa10C8cxGsB35ZBlx71Mt5Dmyl8PhCN68FffPOuAhrXIGQtZAAr8Q9Cf3fpOsoCtGah2ZBVHAU5n8aTVQCR3d9hTsQbccnBpKVVXYR7ZCOnrocsJIiBAIBAPayRqrRMGShoxYTHZBVeA6JJnnHcXjTwCZBe0dcOKuLVuHUKlI6JBsKI1sZD',
      },
    });

    const audioData = audioResponse.data;
    const fileUrl = audioData.url;

    const fileResponse = await axios.get(fileUrl, {
      headers: {
        Authorization:
          'Bearer EAARMCGe1MUcBOzNDrytFoDd0aad954W7PocOQa10C8cxGsB35ZBlx71Mt5Dmyl8PhCN68FffPOuAhrXIGQtZAAr8Q9Cf3fpOsoCtGah2ZBVHAU5n8aTVQCR3d9hTsQbccnBpKVVXYR7ZCOnrocsJIiBAIBAPayRqrRMGShoxYTHZBVeA6JJnnHcXjTwCZBe0dcOKuLVuHUKlI6JBsKI1sZD',
      },
      responseType: 'arraybuffer',
    });

    const buffer = fileResponse.data;
    const filePath = `/tmp/${fileName}`;
    await fs.writeFile(filePath, Buffer.from(buffer));

    const transcript = await this.transcribeAudio(filePath, fileName);

    return { transcript, sender };
  }

  async handler(event: any) {
    try {
      const message = event.entry[0].changes[0].value.messages[0];
      const senderNumber = message.from;
      if (message.document) {
        const { threadId, runId, sender } = await this.processDocument(
          message,
          senderNumber,
        );
        console.log(threadId, runId, sender);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Document processed and sent successfully',
            thread_id: threadId,
            run_id: runId,
            sender_number: sender,
          }),
        };
      } else if (message.audio) {
        const { transcript, sender } = await this.processAudio(
          message,
          senderNumber,
        );
        console.log(transcript, sender);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Audio processed and transcribed successfully',
            transcript: transcript,
            sender_number: sender,
          }),
        };
      } else if (message.text) {
        const { responseMessage, sender } = await this.processText(
          message,
          senderNumber,
        );
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Text message processed successfully',
            response_message: responseMessage,
            sender_number: sender,
          }),
        };
      } else {
        throw new Error('Unsupported message type');
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error processing message',
          error: error.message,
        }),
      };
    }
  }
}
