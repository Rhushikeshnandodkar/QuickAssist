const express = require("express");
const { createChatBot, askChatbot } = require("../controllers/cahtbotController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-bot",middleware.protect, middleware.authorize('admin', 'company'), createChatBot);
router.post("/ask-bot", askChatbot);


module.exports = router;
