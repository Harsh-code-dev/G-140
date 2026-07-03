const {
    getUserMemories,
    saveMemory,
    deleteUserMemory,
} = require("../services/cogneeService");

const getMemories = async (req, res) => {
    try {
        const { userId } = req.params;

        const memories = await getUserMemories(userId);

        res.status(200).json({
            success: true,
            memories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch memories",
        });
    }
};

const addMemory = async (req, res) => {
    try {
        const { userId, content, platform } = req.body;

        const memory = await saveMemory({
            userId,
            content,
            platform,
        });

        res.status(201).json({
            success: true,
            memory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to save memory",
        });
    }
};

const deleteMemory = async (req, res) => {
    try {
        const { memoryId } = req.params;

        const memory = await deleteUserMemory(memoryId);

        res.status(200).json({
            success: true,
            memory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete memory",
        });
    }
};

module.exports = {
    getMemories,
    addMemory,
    deleteMemory,
};