const express = require("express");
const { createCompanyProfile, createProduct } = require("../controllers/companyController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-profile",middleware.protect, middleware.authorize('admin', 'company'), createCompanyProfile);
router.post("/create-product",middleware.protect, middleware.authorize('admin', 'company'), createProduct);


module.exports = router;
