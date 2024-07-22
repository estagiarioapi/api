import axios from 'axios';
import { promises as fs } from 'fs';
import { transcribeAudio } from './transcribeAudio';

export async function processAudio(message: any, sender: string) {
  const audioId = message.audio.id;
  const fileName = `${audioId}.mp3`;

  const urlDownload = `https://graph.facebook.com/v14.0/${audioId}`;
  const audioResponse = await axios.get(urlDownload, {
    headers: {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
    },
  });

  const audioData = audioResponse.data;
  const fileUrl = audioData.url;

  const fileResponse = await axios.get(fileUrl, {
    headers: {
      Authorization:
        'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
    },
    responseType: 'arraybuffer',
  });

  const buffer = fileResponse.data;
  const filePath = `/tmp/${fileName}`;
  await fs.writeFile(filePath, Buffer.from(buffer));

  const transcript = await transcribeAudio(filePath, fileName);

  return { transcript, sender };
}
