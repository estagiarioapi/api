import axios from "axios";

export async function createVectorStore(phoneNumber: string) {
    const url = 'https://api.openai.com/v1/vector_stores';

    const requestOptions = {
        headers: {
            'Authorization': 'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2'
        }
    };
    const body = {
        name: phoneNumber
    };
    try {
        const response = await axios.post(url, body, requestOptions);
        console.log('Vector Store created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating Vector Store:', error);
    }
}