const Memory = require("../models/Memory");

const searchMemory = async (userId, query) => {
    // MVP version: search from MongoDB
    const memories = await Memory.find({
        userId,
        content: { $regex: query.split(" ")[0], $options: "i" },
    }).limit(5);

    return memories;
};

const saveMemory = async ({ userId, content, platform }) => {
    const memory = await Memory.create({
        userId,
        content,
        platform,
        status: "active",
    });

    return memory;
};

const getUserMemories = async (userId) => {
    return await Memory.find({ userId, status: "active" }).sort({ createdAt: -1 });
};

const deleteUserMemory = async (memoryId) => {
    return await Memory.findByIdAndUpdate(
        memoryId,
        { status: "deleted" },
        { new: true }
    );
};

module.exports = {
    searchMemory,
    saveMemory,
    getUserMemories,
    deleteUserMemory,
};