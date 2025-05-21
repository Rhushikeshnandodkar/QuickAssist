const express = require("express")
const {createPurchase, getCurrentPlan} = require("../controllers/purchaseController")
const middleware = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/create-purchase", middleware.protect, createPurchase)
router.get("/purchase-info", middleware.protect, getCurrentPlan)
module.exports = router;