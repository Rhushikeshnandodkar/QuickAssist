const CompanyProfile = require("../models/Company");
const ProductModel = require("../models/Product")
const User = require("../models/User");
const Link = require("../models/Link")
const axios = require("axios")

const SECERATE_KEY = "greenbagboogie"

exports.createChatBot = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        } 
        const { companyId, productId, email } = req.body;
        const company = await CompanyProfile.findById(companyId);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }

        // Corrected ID comparison
        if (!company.user._id.equals(user._id)) {
            return res.status(403).json({ success: false, message: "You cannot create a product for this company" });
        }    
        const product = await ProductModel.findById(productId)
        if(!product){
            return res.status(404).json({ success: false, message: "Product not found" });
        } 
        const link = new Link({
            company : company._id,
            product : product._id,
            useremail : email
        })
        await link.save()
        
        res.status(201).json({
            success : true, 
            message : "Link created successfully",
            data : link
        })

    }catch(err){
        res.status(500).json({success : false, message: err.message})
    }
}

exports.askChatbot = async(req, res) => {
    try{
      const { companyId, productId, uniqueId, question } = req.body;
      const link = await Link.findOne({ uniqueId })
      const company = await CompanyProfile.findById(companyId)
      const product = await ProductModel.findById(productId)
      if(!link){
        return res.status(404).json({success : false, message : "Chatbot not found"})
      }
      if(link.queriesUsed >= 3){
        return res.status(404).json({success : false, message : "this bot has expired"})
      }
      const apiUrl = "http://127.0.0.1:8000/ask/";

      const requestData = {
        name: product.product_name,
        question: question,
        unique_id: productId,
        secerate_key : SECERATE_KEY, // Send the secret key in the request
    };
    const response = await axios.post(apiUrl, requestData, {
        headers: { "Content-Type": "application/json" }
    });
    if(response.status == 200){
        console.log("question asked")
        link.queriesUsed = link.queriesUsed + 1
        link.save()
    }
    return res.status(200).json({success : true, data : response.data})
    }catch(err){
      res.status(500).json({ success: false, message: err.message });
    }
}