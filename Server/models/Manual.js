const mongoose = require("mongoose");

const manualSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  filename: { type: String, required: true },
  text: { type: String, required: true },  // Extracted PDF text
  uploadedAt: { type: Date, default: Date.now },
});

const Manual = mongoose.model("Manual", manualSchema);
module.exports = Manual;
