const openai = require("../config/openai");

const generateAgentResponse = async ({ userMessage, memories }) => {
    const memoryText = memories?.length
        ? memories.map((m, index) => `${index + 1}. ${m.content || m}`).join("\n")
        : "No relevant memory found.";

    const prompt = `
You are RecallAI, an AI agent with long-term memory.

Relevant memories:
${memoryText}

User message:
${userMessage}

Answer using relevant memory if useful.
Do not mention memory unless it helps the user.
`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: "You are a helpful AI assistant with persistent memory.",
            },
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    return response.choices[0].message.content;
};

module.exports = {
    generateAgentResponse,
};