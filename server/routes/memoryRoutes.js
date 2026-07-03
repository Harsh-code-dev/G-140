const express = require("express");
const router = express.Router();

const {
    getMemories,
    addMemory,
    deleteMemory,
} = require("../controllers/memoryController");

router.get("/:userId", getMemories);
router.post("/", addMemory);
router.delete("/:memoryId", deleteMemory);

module.exports = router;