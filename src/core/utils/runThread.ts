import axios from "axios";

export async function runThread(threadId: string, assistantId: string) {
    const response = await axios.post(
        `https://api.openai.com/v1/threads/${threadId}/runs`,
        { assistant_id: assistantId },
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