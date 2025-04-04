const express = require("express");
const { createChatBot, askChatbot, yourBots, currentBot, messageFeedback } = require("../controllers/cahtbotController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-bot",middleware.protect, middleware.authorize('admin', 'company'), createChatBot);
router.post("/ask-bot", askChatbot);
router.get("/your-bots", middleware.protect, yourBots);
router.post("/current-bot", currentBot)
router.post("/message-feedback", messageFeedback)


module.exports = router;
