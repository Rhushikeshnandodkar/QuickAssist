const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB