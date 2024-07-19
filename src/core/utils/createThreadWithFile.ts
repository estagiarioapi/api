import axios from "axios";

export async function createThreadWithFile(
  fileId: string,
  input: string,
  vectorStoreId: string
) {
  const response = await axios.post(
    'https://api.openai.com/v1/threads',
    {
      messages: [
        {
          role: 'user',
          content: input
        },
      ],
      tool_resources: {
        file_search: { vector_store_ids: [vectorStoreId] },
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAARMCGe1MUcBOw1h2brAYouZCUvEDiJ3ZB7JedFoOxcb62NrGPrdiXzyUMmGUllFbUvjbl5CXJvW6BdZCD2fK8NXZCj5xohSz3ZCX7WZAx8UuZCx72QaZCMAesIzPMoLR3YVj4L0oGJKlPy5FZBVq9OWxKTJwG5LaKuyGJaLh9bZAtrTLRbKDFikLbN0zGMRiUkPCh',
        'OpenAI-Beta': 'assistants=v2',
      },
    },
  );

  const data = response.data;
  return data.id;
}