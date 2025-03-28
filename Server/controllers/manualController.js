const fs = require("fs-extra");
const path = require("path");
const pdfParse = require("pdf-parse");
const Manual = require("../models/Manual");
const Product = require("../models/Product");
const CompanyProfile = require("../models/Company");
const User = require("../models/User");
const axios = require("axios"); 
const faiss = require("faiss");
const {OpenAI} = require("openai")

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
    // Fetch user and company details
    const user = await User.findById(req.user.id);
    const companyProfile = await CompanyProfile.findOne({ user: user.id });
    if (!companyProfile) {
      return res.status(400).json({ message: "Company profile not found!" });
    }

    // Check if product exists and belongs to the current user's company
    const { product_name, description } = req.body;

    // Check if the uploaded file is a PDF
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }
    if (req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: "Please upload a valid PDF file!" });
    }

    // Read and parse the PDF file only if the company is valid
    const pdfPath = path.join(__dirname, "../uploads", req.file.filename);
    const dataBuffer = await fs.readFile(pdfPath);
    const data = await pdfParse(dataBuffer);

    const manualText = data.text

    const productId = companyProfile._id
    await createManualEmbedding(productId, manualText, product_name);
    // console.log(company)
    // Save manual to the database
    const manual = await Manual.create({
      company : companyProfile._id,
      product_name : product_name,
      description : description,
      filename: req.file.filename,
      text: data.text, // Store extracted text
    });

    // Respond with success
    res.status(201).json({ message: "Manual uploaded successfully!", manual });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading manual" });
  }
};
