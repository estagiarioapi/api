import axios from 'axios';
import FormData from 'form-data';
import { promises as fs } from 'fs';

export async function uploadFileAndGetFileId(filePath: string, fileName: string) {
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
            Authorization: process.env.OPENAI_KEY,
            'OpenAI-Beta': 'assistants=v2',
            ...form.getHeaders(),
        },
    });

    const data = response.data;
    return data.id;
}