const express = require("express");
const { registerUser, loginUser, userInfo } = require("../controllers/authController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user-info", middleware.protect, userInfo);


module.exports = router;
