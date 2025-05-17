const express = require("express");
const { createCompanyProfile, createProduct, allProducts, companyProfile, getSingleProduct, updateCompanyProfile, companyInfo, usageInfo } = require("../controllers/companyController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-profile",middleware.protect, createCompanyProfile);
router.post("/create-product",middleware.protect, createProduct);
router.get("/all-products",middleware.protect, allProducts);
router.get("/get-profile", middleware.protect, companyProfile);
router.get("/single-product/:id", middleware.protect, getSingleProduct);
router.patch("/update-profile", middleware.protect, updateCompanyProfile)
router.post("/company-info", companyInfo)
router.get("/usage-info/:id", middleware.protect, usageInfo);

module.exports = router;
