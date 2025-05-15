const mongoose = require("mongoose")

const CompanyDataSchema = new mongoose.Schema({
    company : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the CustomUser model
      required: true, 
    },
    purchase : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase", // Reference to the CustomUser model
        required: true, 
      },
  tokens_used: {
    type: Number,
    required: true,
    default: 0
  },
  queries_used: {
    type: Number,
    required: true,
    default: 0
  },

});

module.exports = mongoose.model("CompanyDataModel", CompanyDataSchema)
