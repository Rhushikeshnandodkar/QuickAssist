const express = require("express");
const { createChatBot, askChatbot, yourBots, currentBot, messageFeedback, feedBackInformation, productMessages, singleProductMessages } = require("../controllers/cahtbotController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-bot",middleware.protect, createChatBot);
router.post("/ask-bot", askChatbot);
router.get("/your-bots", middleware.protect, yourBots);
router.post("/current-bot", currentBot)
router.post("/message-feedback", messageFeedback)
router.get('/feedback-info', middleware.protect, feedBackInformation)
router.get('/product-messages-info', middleware.protect, productMessages)

router.get('/single-product-messages/:id', middleware.protect, singleProductMessages)

module.exports = router;
