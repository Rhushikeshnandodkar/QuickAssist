const PurchaseModel = require("../models/Purchase")
const {PLAN_DETAILS} = require("../config/planeDetails")
const User = require("../models/User");
const CompanyProfile = require("../models/Company");
const CompanyData = require("../models/CompanyData");

exports.createPurchase = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        const profile = await CompanyProfile.findOne({user : user.id})
        if(!profile){
            return res.status(400).json({
                success : false,
                message : "you don't have company not found"
            })
        }
        const { companyId, plan } = req.body;
        const company = await CompanyProfile.findById(companyId);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }
        if(!PLAN_DETAILS[plan]){
            return res.status(400).json({ message: "Invalid plan selected." });
        }
        const planDetails = PLAN_DETAILS[plan]

        const purchase = new PurchaseModel({
            company : companyId,
            plan,
            price : planDetails.price,
            tokenLimitPerMonth : planDetails.tokenLimit, 
            isPaid : planDetails.price === 0,
            nextBillingDate: getNextBillingDate()
        })
        await purchase.save();

        const company_data = await CompanyData.findOne({ company: companyId })
        console.log(company_data)
        company_data.purchase = purchase._id;
        await company_data.save()

        res.status(201).json({
            message: "Plan purchased successfully",
            purchase
        });
    }catch(error){
        res.status(500).json({success : false, message : error.message})
    }
}

function getNextBillingDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date;
}