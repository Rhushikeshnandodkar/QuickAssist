const express = require("express");
const { createCompanyProfile, createProduct, allProducts, companyProfile } = require("../controllers/companyController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-profile",middleware.protect, middleware.authorize('admin', 'company'), createCompanyProfile);
router.post("/create-product",middleware.protect, middleware.authorize('admin', 'company'), createProduct);
router.get("/all-products",middleware.protect, middleware.authorize('company'), allProducts);
router.get("/get-profile", middleware.protect, middleware.authorize('company'), companyProfile)

module.exports = router;
