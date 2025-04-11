const CompanyProfile = require("../models/Company");
const ProductModel = require("../models/Product")
const User = require("../models/User");
const Manual = require("../models/Manual")
const LinkSchema = require("../models/Link")
const MessageModel = require("../models/Messages")
exports.createCompanyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const existingProfile = await CompanyProfile.findOne({user: user.id})

    if (existingProfile) {
        // If the profile exists, just return the existing profile without uploading new files
        return res.status(200).json({
          success: true,
          message: "Profile already exists",
          data: existingProfile,
        });
      }
    const { company_name, description, address, company_email, company_website, company_contact } = req.body;
    const profile = new CompanyProfile({
      user: user.id, // Link the profile to the user
      company_name,
      description,
      address,
      company_email,
      company_website,
      company_contact
    });

    await profile.save();

    res.status(201).json({
      success: true,
      message: "Company profile created successfully",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateCompanyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const existingProfile = await CompanyProfile.findOne({ user: user.id });

    if (!existingProfile) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    // Extract fields to update
    const { company_name, description, address, company_email, company_website, company_contact} = req.body;

    // Update only the provided fields
    if (company_name) existingProfile.company_name = company_name;
    if (description) existingProfile.description = description;
    if (address) existingProfile.address = address;
    if (company_email) existingProfile.company_email = company_email;
    if (company_website) existingProfile.company_website = company_website;
    if (company_contact) existingProfile.company_contact = company_contact;


    await existingProfile.save();

    res.status(200).json({
      success: true,
      message: "Company profile updated successfully",
      data: existingProfile,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.companyInfo = async(req, res) =>{
  try{
    const {companyId} = req.body;
    const company = await CompanyProfile.findOne({_id : companyId})
    console.log(company)
    return res.status(200).json({success : true, data : company})
  }catch(err){
    res.status(500).json({ success: false, message: err.message });
  }
}

exports.companyProfile = async(req, res) =>{
  try{
     const user = await User.findById(req.user.id)
     const profile = await CompanyProfile.findOne({user : user.id})
     if(profile){
      no_of_products = await Manual.find({company : profile})
      chatbots = await LinkSchema.find({company : profile})
      interactions = await MessageModel.find({company : profile})
      console.log(interactions)
      return res.status(200).json({
        success : true,
        message : "your profile data",
        data : profile,
        products : no_of_products.length,
        chatbots : chatbots.length,
        interactions : interactions.length
      })
     }else{
      return res.status(400).json({
        success : false,
        message : "company not found"
      })
     }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

exports.createProduct = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { companyId, product_name, description } = req.body;
        const company = await CompanyProfile.findById(companyId);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }

        // Corrected ID comparison
        if (!company.user._id.equals(user._id)) {
            return res.status(403).json({ success: false, message: "You cannot create a product for this company" });
        }

        const product = new ProductModel({
            company: company._id, // Store ObjectId
            product_name,
            description
        });

        await product.save();

        res.status(201).json({
            success: true,
            message: "Company product created successfully",
            data: product,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.allProducts = async(req, res) =>{
  try{
    const user = await User.findById(req.user.id)
    const company = await CompanyProfile.findOne({user : user})
    if(!company){
      return res.status(404).json({
        success : false,
        message : "company not found"
      })
    }
    const products = await Manual.find({company : company})
    const enrichedProducts = await Promise.all(
      products.map(async (product) => {
        const product_info = await Manual.findById(product._id)
        const chatbotCount = await Link.countDocuments({ product: product._id });

        const answered = await MessageFeedback.findOne({product  : product._id, answered : false})

        const chatbotIds = await Link.find({ product: product._id }).distinct("_id");
        const interactionCount = await MessageModel.countDocuments({ uniqueId: { $in: chatbotIds.uniqueId } });

        // console.log(product_info, answeredCount, unansweredCount)
                // Count answered and unanswered messages for this product
        const answeredCount = await MessageFeedback.countDocuments({
                  product: product._id,
                  answered: false,
        });
        console.log(answeredCount)
        return {
          ...product.toObject(),
          chatbotCount,
          interactionCount,
          answeredCount,
        };
      })
    );
    console.log(enrichedProducts.interactionCount)
    res.status(200).json({ success: true, data: enrichedProducts});
  }catch(err){
    res.status(500).json({ success: false, message: err.message });
  }
}

const mongoose = require("mongoose");
const Message = require("../models/Messages");
const Link = require("../models/Link");
const MessageFeedback = require("../models/MessageFeedback");

exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch product, user, and company
    const product = await Manual.findById(id);
    const user = await User.findById(req.user.id);
    const company = await CompanyProfile.findOne({ user: user });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Ensure IDs are properly compared as ObjectIds
    if (!company || !product.company.equals(company._id)) {
      console.log(product.company, company._id);
      return res.status(403).json({
        success: false,
        message: "You don't have permission to perform this action",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
