export function processText(message: any, sender: string) {
    const text = message.text.body;

    return { text, sender };
}