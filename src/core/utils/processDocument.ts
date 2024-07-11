import axios from "axios";
import { existingAssistantId, existingVectorStoreId } from "./cache";
import { promises as fs } from 'fs';

export async function processDocument(message: any, sender: string) {
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
            headers: { Authorization: process.env.ACCESS_TOKEN },
        });
        const documentData = documentResponse.data;
        const fileUrl = documentData.url;
        const fileResponse = await axios.get(fileUrl, {
            headers: { Authorization: process.env.ACCESS_TOKEN },
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
