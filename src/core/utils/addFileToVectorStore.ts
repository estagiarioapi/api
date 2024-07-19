import axios from "axios";

export async function addFileToVectorStore(fileId: string, vectorStoreId: string) {
    const response = await axios.post(
        `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files`,
        { file_id: fileId },
        {
            headers: {
                Authorization: 'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2',
            },
        },
    );

    const data = response.data;
    return data;
}