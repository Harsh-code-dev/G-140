const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            default: "web",
        },
        status: {
            type: String,
            enum: ["active", "deleted", "outdated"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Memory", memorySchema);