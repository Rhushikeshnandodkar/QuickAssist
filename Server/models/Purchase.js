const mongoose = require("mongoose")

const PurchaseSchema = new mongoose.Schema({
  company : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the CustomUser model
      required: true,
    },
 plan: {
    type: String,
    enum: ["Free", "Starter", "Advanced", "Business"],
    required: true,
    default: "Free"
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  tokensUsedThisMonth: {
    type: Number,
    default: 0
  },
  tokenLimitPerMonth: {
    type: Number,
    required: true
  },
  maxProducts: {
    type: Number,
    default : 5
  },
  maxQueries: {
    type: Number,
    default : 100
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  nextBillingDate: {
    type: Date
  }
});

module.exports = mongoose.model("PurchaseModel", PurchaseSchema)
