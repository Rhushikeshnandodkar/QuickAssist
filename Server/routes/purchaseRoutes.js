const express = require("express")
const {createPurchase} = require("../controllers/purchaseController")
const middleware = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/create-purchase", middleware.protect, createPurchase)

module.exports = router;