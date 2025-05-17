const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
      console.log("Connecting to:", process.env.MONGO_URL);
      await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  };

module.exports = connectDB