const CompanyProfile = require("../models/Company")
const User = require("../models/User")
const mongoose = require('mongoose');
const CompanyDataModel = require("../models/CompanyData");
const { PLAN_DETAILS } = require("../config/planeDetails");
const PurchaseModel = require("../models/Purchase")
exports.getAllUsers = async(req, res) =>{
    try{
        const users = await User.find()
        // console.log(users)
        res.status(201).json({
            success : true,
            message : "all user are here",
            data : users
        })
    }catch(err){
        res.status(500).json({message : "server error", error: err})
    }
}

exports.approvUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    user.role = "company";
    await user.save(); // ✅ Await the save

    const company = await CompanyProfile.findOne({ user: user._id }); // ✅ Use user._id

    if (!company) {
      return res.status(404).json({ message: "Company profile not found" });
    }

    const plan = 'Free'; // ✅ Define plan
    const planDetails = PLAN_DETAILS[plan];

    const purchase = new PurchaseModel({
      company: company._id,
      plan,
      price: planDetails.price,
      tokenLimitPerMonth: planDetails.tokenLimit,
      isPaid: planDetails.price === 0,
      nextBillingDate: getNextBillingDate(),
      maxProducts: planDetails.maxProducts,
      maxQueries: planDetails.maxQueries,
    });

    await purchase.save();
    console.log("Purchase saved:", purchase);

    res.status(200).json({
      message: "User approved successfully",
      user: user,
    });
  } catch (err) {
    console.log("Approval Error:", err); // ✅ Proper error logging
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

function getNextBillingDate() {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date;
}

exports.suspendUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    user.role = "user";
    await user.save(); // ✅ Await the save

    res.status(200).json({
      message: "User Suspended successfully",
      user: user,
    });

  } catch (err) {
    console.log("Approval Error:", err); // ✅ Proper error logging
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.allCompanies = async (req, res) => {
  try {
    // console.log("All models loaded:", mongoose.modelNames());

    const allCompanyData = await CompanyDataModel.find({})
      .populate({"path" : 'company', populate : {path : "user", model : "User"}})   // ✅ field name, not model name
      .populate('purchase'); // if you want purchase details too

    // console.log("Company data:", allCompanyData);

    res.status(200).json({
      message: "All companies data fetched successfully",
      data: allCompanyData,
    });
  } catch (err) {
    console.error("Error fetching company data:", err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};

exports.fetchSingleCompany = async(req, res) =>{
  try{
    const {id} = req.params;
    const companyData = await CompanyDataModel.findById(id)
    .populate({"path" : 'company', populate : {path : "user", model : "User"}}).populate('purchase');
    return res.status(200).json({success : true, message : "data fetched sucessfull", data : companyData})
  }catch(err){
    res.status(500).json({message : "server error", error : err})
  }
}



