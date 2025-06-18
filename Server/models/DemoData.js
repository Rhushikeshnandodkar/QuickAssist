const mongoose = require("mongoose");
// Define the StudentProfile schema
const DemoDataSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: null,
  },
  last_name: {
    type: String,
    default: null,
  },
  work_email: {
    type: String,
    default: null,
  },
  company_name:{
    type: String,
    default: null
  },
  phone_number:{
    type: String,
    default: null
  },
  challenges : {
    type: String,
    default: null
  },
  timestamp: { type: Date, default: Date.now },
});

// Export the model
const DemoModel = mongoose.model("DemoModel", DemoDataSchema);

module.exports = DemoModel;
