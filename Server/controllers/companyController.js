const CompanyProfile = require("../models/Company");
const ProductModel = require("../models/Product")
const User = require("../models/User");

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
    const { company_name, description, address } = req.body;
    const profile = new CompanyProfile({
      user: user.id, // Link the profile to the user
      company_name,
      description,
      address,
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
      return res.status(400).json({
        success : false,
        message : "company not found"
      })
    }
    const products = await ProductModel.find({company : company})
    res.status(200).json({ success: true, data: products });

  }catch(err){
    res.status(500).json({ success: false, message: err.message });
  }
}
