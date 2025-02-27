const mongoose = require("mongoose");
const {v4 : uuidv4} = require("uuid")

// Define the StudentProfile schema
const LinkSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company", // Reference to the CustomUser model
    required: true,
  },
  product: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
    required : true
  },
  useremail : {type : String, required: true},
  uniqueId: { type: String, unique: true, default: uuidv4 }, // Generate unique ID
  queriesUsed: { type: Number, default: 0 },
  maxQueries: { type: Number, default: 10 },
  isExpired: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Export the model
const Link = mongoose.model("Link", LinkSchema);

module.exports = Link;
