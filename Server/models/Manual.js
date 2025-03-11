const mongoose = require("mongoose");

const manualSchema = new mongoose.Schema({
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
  // product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  filename: { type: String, required: true },
  text: { type: String, required: true },  // Extracted PDF text
  uploadedAt: { type: Date, default: Date.now },
});

const Manual = mongoose.model("Manual", manualSchema);
module.exports = Manual;
