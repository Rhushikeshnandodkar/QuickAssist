const express = require("express");
const { createCompanyProfile, createProduct, allProducts, companyProfile, getSingleProduct, updateCompanyProfile, companyInfo, usageInfo, demoFormSubmission } = require("../controllers/companyController");
const middleware = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-profile", middleware.protect, createCompanyProfile);
router.post("/create-product", middleware.protect, middleware.authorize("company", "admin"), createProduct);
router.get("/all-products", middleware.protect, middleware.authorize("company", "admin"), allProducts);
router.get("/get-profile", middleware.protect, middleware.authorize("company", "admin"), companyProfile);
router.get("/single-product/:id", middleware.protect, middleware.authorize("company", "admin"), getSingleProduct);
router.patch("/update-profile", middleware.protect, middleware.authorize("company", "admin"), updateCompanyProfile)
router.post("/company-info", companyInfo)
router.get("/usage-info/:id", middleware.protect, middleware.authorize("company", "admin"), usageInfo);
router.post("/demo-form", demoFormSubmission)
module.exports = router;
