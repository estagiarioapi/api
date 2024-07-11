import axios from "axios";

export async function createThreadWithFile(
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
        Authorization: process.env.OPENAI_KEY,
        'OpenAI-Beta': 'assistants=v2',
      },
    },
  );

  const data = response.data;
  return data.id;
}