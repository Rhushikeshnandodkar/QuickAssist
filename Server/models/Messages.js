const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    sender : {
        type : String,
        default : null
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanyProfile",
        required: true,
      },
    product: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Manual",
        required : true
    },
    content : {
        type : String,
        default : null
    },
    timestamp: { type: Date, default: Date.now },
    uniqueId : {
        type : String,
        default : null
    },
    videos: [
        {
            video_link : { type: String, required: true },
            video_description : { type: String }
        }
    ]
})

const Message = mongoose.model("Message", MessageSchema)

module.exports = Message;