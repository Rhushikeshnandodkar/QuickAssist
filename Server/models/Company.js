const mongoose = require("mongoose");
// Define the StudentProfile schema
const companyProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the CustomUser model
    required: true,
  },
  company_name: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  total_products:{
    type: String,
    default: null
  },
  company_email:{
    type: String,
    default: null
  },
  company_website:{
    type: String,
    default: null
  },
  total_tokens : {
    type : Number,
    require : false,
    default : 0,
  },
  company_contact:{
    type: String,
    default: null
  }


});

// Export the model
const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

module.exports = CompanyProfile;
