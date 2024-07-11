import axios from "axios";

export async function addFileToVectorStore(fileId: string, vectorStoreId: string) {
    const response = await axios.post(
        `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`,
        { file_id: fileId },
        {
            headers: {
                Authorization: process.env.OPENAI_KEY,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2',
            },
        },
    );

    const data = response.data;
    return data;
}