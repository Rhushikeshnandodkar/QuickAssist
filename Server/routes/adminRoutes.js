const express = require("express")
const middleware = require("../middleware/authMiddleware")
const { getAllUsers, approvUser, allCompanies, suspendUser, fetchSingleCompany, demoForms } = require("../controllers/adminController")
const router = express.Router()

router.get("/get-users", middleware.protect, middleware.authorize("admin"), getAllUsers)
router.post("/approv-user", middleware.protect, middleware.authorize("admin"), approvUser)
router.post("/suspend-user", middleware.protect, middleware.authorize("admin"), suspendUser)
router.get("/get-companies", middleware.protect, middleware.authorize("admin"), allCompanies)
router.get("/get-company-details/:id", middleware.protect, middleware.authorize("admin"), fetchSingleCompany)
router.get("/get-demo-forms", middleware.protect, middleware.authorize("admin"), demoForms)

module.exports = router