const PurchaseModel = require("../models/Purchase")
const {PLAN_DETAILS} = require("../config/planeDetails")
const User = require("../models/User");
const CompanyProfile = require("../models/Company");
const CompanyData = require("../models/CompanyData");
const Purchase = require("../models/Purchase");

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
            nextBillingDate: getNextBillingDate(),
            maxProducts : planDetails.maxProducts,
            maxQueries : planDetails.maxQueries
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

exports.getCurrentPlan = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        const profile = await CompanyProfile.findOne({user : user.id})
        if(!profile){
            return res.status(400).json({
                success : false,
                message : "you don't have company not found"
            })
        }
        const purchaseInfo = await PurchaseModel.find({company : profile})
           // Get the most recent purchase
    const latestPurchase = await PurchaseModel.findOne({ company: profile._id })
    .sort({ purchaseDate: -1 }) // Sort by newest first
    .populate("plan"); // Optional: populate plan details if it's referenced
  if (!latestPurchase) {
    return res.status(404).json({
      success: false,
      message: "No purchases found for this company",
    });
  }
        res.status(201).json({
            message : "Purchase info is here",
            planData : purchaseInfo,
            currentPlan : latestPurchase
        })
    }catch(err){
        res.status(500).json({success : false, message : err.message})
    }
}