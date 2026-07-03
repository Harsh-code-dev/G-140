const { generateAgentResponse } = require("../services/llmService");
const { searchMemory, saveMemory } = require("../services/cogneeService");
const { extractMemory } = require("../services/memoryExtractor");

const chatWithAgent = async (req, res) => {
    try {
        const { userId, message, platform } = req.body;

        if (!userId || !message) {
            return res.status(400).json({
                success: false,
                message: "userId and message are required",
            });
        }

        // 1. Search old memory
        const memories = await searchMemory(userId, message);

        // 2. Generate AI response using memory
        const answer = await generateAgentResponse({
            userMessage: message,
            memories,
        });

        // 3. Extract useful new memory from user message
        const newMemory = await extractMemory(message);

        // 4. Save memory if useful
        if (newMemory) {
            await saveMemory({
                userId,
                content: newMemory,
                platform: platform || "web",
            });
        }

        res.status(200).json({
            success: true,
            answer,
            usedMemories: memories,
            savedMemory: newMemory,
        });
    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong in chat controller",
        });
    }
};

module.exports = {
    chatWithAgent,
};