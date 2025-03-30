const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    sender : {
        type : String,
        default : null
    },
    content : {
        type : String,
        default : null
    },
    timestamp: { type: Date, default: Date.now },
    uniqueId : {
        type : String,
        default : null
    }
})

const Message = mongoose.model("Message", MessageSchema)

module.exports = Message;