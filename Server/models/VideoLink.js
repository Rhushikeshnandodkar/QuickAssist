const mongoose = require("mongoose")

const VideoLinkSchema = new mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Manual",
        required : true
    },
    video_link : {
        type : String,
        default : null
    },
    video_description : {
        type : String,
        default : null
    },
    video_title : {
        type : String,
        default : null
    }
})

const VideoLink = mongoose.model("VideoLink", VideoLinkSchema)

module.exports = VideoLink