const mongoose = require("mongoose")

const MessageFeedbackSchema = new mongoose.Schema({
    uniqueId : {
        type : String,
        default : null
    },
    message_id: {
        type: mongoose.Schema.Types.ObjectId, // Store reference to Message model
        ref: "Messages"
    },
    content: {
        type: String, // Will store the content of the referenced message
        default: null
    },
    answered : {
        type : Boolean,
        default : true
    }
})
const MessageFeedback = mongoose.model("MessageFeedback", MessageFeedbackSchema);

module.exports = MessageFeedback