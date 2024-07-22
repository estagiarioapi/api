import axios from 'axios';
import FormData from 'form-data';
import { promises as fs } from 'fs';

export async function transcribeAudio(filePath: string, fileName: string) {
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
        Authorization: process.env.OPENAI_KEY,
        ...form.getHeaders(),
      },
    },
  );

  const data = response.data;
  return data.text;
}
