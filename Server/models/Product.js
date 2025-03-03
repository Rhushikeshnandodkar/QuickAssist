const mongoose = require("mongoose");

// Define the StudentProfile schema
const  productSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company", // Reference to the CustomUser model
    required: true,
  },
  product_name: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  manual_link: {
    type: String,
    default: null,
  },

});

// Export the model
const productModel = mongoose.model("productModel", productSchema);

module.exports = productModel;
