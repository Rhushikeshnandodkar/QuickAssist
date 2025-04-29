const fs = require("fs-extra");
const path = require("path");
const pdfParse = require("pdf-parse");
const Manual = require("../models/Manual");
const Product = require("../models/Product");
const CompanyProfile = require("../models/Company");
const User = require("../models/User");
const axios = require("axios"); 
const faiss = require("faiss");
const {OpenAI} = require("openai");
const VideoLink = require("../models/VideoLink");

const FASTAPI_URL = "http://127.0.0.1:8000";

async function createManualEmbedding(productId, manualText, product_name) {
    try {
      await axios.post(`${FASTAPI_URL}/store/`, {
        name : product_name,
        unique_id: productId,
        text: manualText,
      });
    } catch (error) {
      console.error("Error creating embeddings:", error);
      throw new Error("Failed to create embeddings");
    }
  }

exports.uploadManual = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const companyProfile = await CompanyProfile.findOne({ user: user.id });
    if (!companyProfile) {
      return res.status(400).json({ message: "Company profile not found!" });
    }

    const { product_name, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }
    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: "Please upload a valid PDF file!" });
    }

    const pdfPath = path.join(__dirname, "../uploads", req.file.filename);
    const dataBuffer = await fs.readFile(pdfPath);
    const data = await pdfParse(dataBuffer);

    const manualText = data.text

    const productId = companyProfile._id
    await createManualEmbedding(productId, manualText, product_name);

    const manual = await Manual.create({
      company : companyProfile._id,
      product_name : product_name,
      description : description,
      filename: req.file.filename,
      text: data.text, 
    });

    res.status(201).json({ message: "Manual uploaded successfully!", manual });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading manual" });
  }
};

exports.updateManual = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const companyProfile = await CompanyProfile.findOne({ user: user.id });
    const manualId = req.params.id;
    
    const product = await Manual.findById(manualId);
    if (!companyProfile) {
      return res.status(400).json({ message: "Company profile not found!" });
    }
    // Ensure IDs are properly compared as ObjectIds
    if (!companyProfile || !product.company.equals(companyProfile._id)) {
      console.log(product.companyProfile, companyProfile._id);
      return res.status(403).json({
        success: false,
        message: "You don't have permission to perform this action",
      });
    }

    const { product_name, description, text } = req.body;
    
    const manual = await Manual.findOne({ _id: manualId, company: companyProfile._id });
    if (!manual) {
      return res.status(404).json({ message: "Manual not found!" });
    }

    if (product_name) manual.product_name = product_name;
    if (description) manual.description = description;
    if (text) manual.text = text;

    await manual.save();

    res.status(200).json({ message: "Manual updated successfully!", manual });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating manual" });
  }
};


exports.uploadVideoLink = async(req, res) =>{
  try{
    const user = await User.findById(req.user.id)
    const existingProfile = await CompanyProfile.findOne({user: user.id})
    const company = await CompanyProfile.findOne({ user: user });

    if (!existingProfile) {
        return res.status(200).json({
          success: true,
          message: "Profile does not exists",
          data: existingProfile,
        });
      }
    
      const {id} = req.params;
      const {video_description, video_link, video_title} = req.body
      const product = await Manual.findById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      if (!company || !product.company.equals(company._id)) {
        console.log(product.company, company._id);
        return res.status(403).json({
          success: false,
          message: "You don't have permission to perform this action",
        });
      }

      const videoLink = new VideoLink({
        product : product,
        video_link,
        video_description,
        video_title
      })
      await videoLink.save();
      res.status(201).json({
        success: true,
        message: "video link uploaded successfully",
        data: videoLink,
      });    
  }catch(err){
    res.status(500).json({ success: false, message: err.message });
  }
}
