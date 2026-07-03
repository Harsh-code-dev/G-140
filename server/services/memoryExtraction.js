const openai = require("../config/openai");

const extractMemory = async (message) => {
    const prompt = `
Extract a useful long-term memory from this message.

Only return memory if the message contains:
- user preference
- project detail
- decision
- correction
- important fact

If nothing useful should be remembered, return only: NONE

Message:
${message}
`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: "You extract useful memories for an AI agent.",
            },
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    const result = response.choices[0].message.content.trim();

    if (result === "NONE") return null;

    return result;
};

module.exports = {
    extractMemory,
};