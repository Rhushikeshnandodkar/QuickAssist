const CompanyProfile = require("../models/Company");
const ProductModel = require("../models/Product")
const User = require("../models/User");
const Link = require("../models/Link")
const axios = require("axios");
const Manual = require("../models/Manual");
const Message = require("../models/Messages");
const SECERATE_KEY = "greenbagboogie"
const MessageFeedback = require("../models/MessageFeedback")
const nodemailer = require("nodemailer")
const VideoLink = require("../models/VideoLink");
const CompanyDataModel = require("../models/CompanyData");

const sendEmail = async (toEmail, companyName, productName, chatbotLink) =>{
    try {
        // Configure Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "quickassistofficial@gmail.com",  // Replace with your email
                pass: "dkll yqiu vdhg rshi"  // Replace with your app password
            }
            //sfbs qscm dyee ezsf 
        });

        // Email content
        let mailOptions = {
            from: "quickassistofficial@gmail.com",
            to: toEmail,
            subject: "Your Chatbot is Ready!",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #2A2F4F;">Hello sir!</h2>
                    <p>Your chatbot for <b>${companyName}</b> - <b>${productName}</b> is here.</p>
                    <p>Click the link below to access your chatbot:</p>
                    <a href="${chatbotLink}" style="display: inline-block; padding: 10px 20px; background-color: #2A2F4F; color: white; text-decoration: none; border-radius: 5px;">
                        Open Chatbot
                    </a>
                    <p>If you have any questions, feel free to contact us.</p>
                    <p>Best Regards, <br> Your Company Team</p>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${toEmail}`);

    } catch (error) {
        console.error("Error sending email:", error);
    }
}
exports.createChatBot = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        } 
        const { companyId, productId, email } = req.body;
        const company = await CompanyProfile.findById(companyId);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }

        // Corrected ID comparison
        if (!company.user._id.equals(user._id)) {
            return res.status(403).json({ success: false, message: "You cannot create a product for this company" });
        }    
        const product = await Manual.findById(productId)
        if(!product){
            return res.status(404).json({ success: false, message: "Product not found" });
        } 
        const link = new Link({
            company : company._id,
            product : product._id,  
            useremail : email
        })
        await link.save()
        const chatbotLink = `http://localhost:5173/chatbot/${company._id}/${product._id}/${link.uniqueId}`
        await sendEmail(email, company.company_name, product.product_name, chatbotLink);
        res.status(201).json({
            success : true, 
            message : "Link created successfully",
            data : link
        })

    }catch(err){
        res.status(500).json({success : false, message: err.message})
    }
}

// DELETE: Delete a chatbot link
exports.deleteChatBot = async (req, res) => {
  try {
      const user = await User.findById(req.user.id);
      if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
      }

      const { uniqueId, productId} = req.params;

      // Find the link by uniqueId and productId
      const link = await Link.findOne({ uniqueId, product: productId }).populate({
          path: 'company',
          populate: { path: 'user' }
      });

      if (!link) {
          return res.status(404).json({ success: false, message: "Chatbot link not found" });
      }

      // Check if the logged-in user owns the company
      if (!link.company.user._id.equals(user._id)) {
          return res.status(403).json({ success: false, message: "You are not authorized to delete this chatbot" });
      }

      // Delete the link
      await Link.deleteOne({ _id: link._id });

      return res.status(200).json({
          success: true,
          message: "Chatbot link deleted successfully"
      });

  } catch (err) {
      res.status(500).json({ success: false, message: err.message });
  }
};


exports.askChatbot = async (req, res) => {
    try {
      const { companyId, productId, uniqueId, question } = req.body;
  
      const link = await Link.findOne({ uniqueId });
      const company = await CompanyProfile.findById(companyId);
      const product = await Manual.findById(productId);
  
      if (!link) {
        return res.status(404).json({ success: false, message: "Chatbot not found" });
      }
  
      if (link.queriesUsed >= 50) {
        return res.status(403).json({ success: false, message: "This bot has expired" });
      }
  
      // 💬 Save User Message
      const user_message = new Message({
        sender: "user",
        product,
        content: question,
        company,
        uniqueId
      });
      await user_message.save();
  
      // 🧠 Ask FastAPI
      const apiUrl = "http://127.0.0.1:8000/ask/";
      const requestData = {
        name: product.product_name,
        question,
        unique_id: companyId,
        secerate_key: SECERATE_KEY,
      };
  
      const response = await axios.post(apiUrl, requestData, {
        headers: { "Content-Type": "application/json" }
      });

      // console.log(response)
  
      if (response.status === 200) {
        link.queriesUsed += 1;
        await link.save();
      }

      // TOKEN DATA UPDATION CODE
      // if(response.data.answer){
      //   const companydata = await CompanyDataModel.findOne({company})
      //   companydata.tokens_used += response.data.answer.response_metadata.token_usage.total_tokens;  // or however you want to count
      //   companydata.queries_used += 1;
      //   await companydata.save()
      // }
      const videos = await VideoLink.find({product : product});
    //   console.log('vidoes are .................', videos)
      // Format videos to send to FastAPI
      const formattedVideos = videos.map(video => ({
        description: video.video_description,
        video_link: video.video_link
      }));

    //   console.log("formated videos are -----------------> ", formattedVideos)
  
      // 🔍 Send videos and question to FastAPI for similarity check
      const suggestApiUrl = "http://127.0.0.1:8000/suggest-videos";
      const suggestResponse = await axios.post(suggestApiUrl, {
        query: question,
        videos: formattedVideos
      });

    //   console.log(suggestResponse)
  
      const suggestedVideos = suggestResponse.data.matched_videos || [];

      // console.log('suggested videos are like ------> ', suggestedVideos)

      const bot_response = new Message({
        sender: "bot",
        product,
        company,
        content: response.data.answer.content,
        uniqueId,
        videos: Array.isArray(suggestedVideos)
        ? suggestedVideos.map(video => ({
            video_link: video.video_link,
            video_description: video.description || ""
          }))
        : []       
      });
      await bot_response.save();
  
      // 🎥 Fetch all videos for the product
      

  
      return res.status(200).json({
        success: true,
        data: {
          answer: response.data.answer,
          videos: suggestedVideos
        }
      });
  
    } catch (err) {
      console.error("askChatbot Error:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  };
  

// exports.askChatbot = async(req, res) => {
//     try{
//       const { companyId, productId, uniqueId, question } = req.body;
//       const link = await Link.findOne({ uniqueId })
//       const company = await CompanyProfile.findById(companyId)
//       const product = await Manual.findById(productId)
//       if(!link){
//         return res.status(404).json({success : false, message : "Chatbot not found"})
//       }
//       if(link.queriesUsed >= 10){
//         // link.isExpired = true
//         return res.status(404).json({success : false, message : "this bot has expired"})
//       }

//       const user_message = new Message({sender : "user", product, content : question, company, uniqueId})
//       await user_message.save()

//       const apiUrl = "http://127.0.0.1:8000/ask/";
//       console.log(product.product_name)
//       const requestData = {
//         name: product.product_name,
//         question: question,
//         unique_id: companyId,
//         secerate_key : SECERATE_KEY, // Send the secret key in the request
//     };
//     const response = await axios.post(apiUrl, requestData, {
//         headers: { "Content-Type": "application/json" }
//     });
//     if(response.status == 200){
//         console.log("question asked")
//         link.queriesUsed = link.queriesUsed + 1
//         link.save()
//     }
//     const bot_response = new Message({sender : "bot", product, company,  content : response.data.answer.content, uniqueId})
//     await bot_response.save()
//     console.log(response.data.answer.content)
//     return res.status(200).json({success : true, data : response.data})
//     }catch(err){
//       res.status(500).json({ success: false, message: err.message });
//     }
// }

exports.yourBots = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        const company = await CompanyProfile.findOne({user : user})
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }
        // Corrected ID comparison
        if (!company.user._id.equals(user._id)) {
            return res.status(403).json({ success: false, message: "You cannot create a product for this company" });
        } 
        const links = await Link.find({company : company}).populate("product", 'product_name description uploadedAt').populate({path : 'company', populate: {path : "user"}}).exec()
        return res.status(200).json({success : true, data : links})
    }catch(err){
        res.status(500).json({ success: false, message: err.message }); 
    }
}

exports.currentBot = async(req, res) =>{
    try{
        const {uniqueId} = req.body
        const bot = await Link.findOne({uniqueId : uniqueId}).populate("product", 'product_name description uploadedAt').populate("company", "company_name").exec()
        const messages = await Message.find({uniqueId : uniqueId})
        if(!bot){
            return res.status(403).json({success : false, message : "bot not found"})
        }
        res.status(200).json({success: true, data : {botdata : bot, messages : messages}})
    }catch(err){
        res.status(500).json({success : false, message : err.message})
    }
}

exports.messageFeedback = async(req, res) =>{
    try{
        const {uniqueId, message_id, result, product, company} = req.body
        // console.log(result)
        const message = await Message.findById(message_id)
        const existingFeedback = await MessageFeedback.findOne({message_id : message_id})
        if(existingFeedback){
            return res.status(403).json({success : false, message : "Feedback allready exists"})
        }
        if (!message) {
            console.log("Message not found");
            return;
        }
        
        const feedback = new MessageFeedback({
            uniqueId,
            product : product,
            company,
            message_id : message_id,
            content : message.content,
            answered : result
        })
        await feedback.save();
        res.status(200).json({success: true, data : feedback})
    }catch(err){
        res.status(500).json({success : false, message : err.message})
    }
}

exports.feedBackInformation = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        const company = await CompanyProfile.findOne({user : user})
        const chatbots = await Link.find({company: company})
        const messages = await MessageFeedback.find({company : company})
        const total_message = await Message.find({company : company})
        const not_answered = messages.length
        const answered = total_message.length - not_answered 
        console.log(company)
        console.log(messages)
        return res.status(200).json({success : true, data : messages, not_answered : not_answered, answered : answered})

    }catch(err){
        res.status(500).json({success : false, message : err.message})
    }
}

exports.productMessages = async(req, res) =>{
     try{
       const user = await User.findById(req.user.id)
       const company = await CompanyProfile.findOne({user : user})
       if(!company){
         return res.status(404).json({
           success : false,
           message : "company not found"
         })
       }
       const products = await Manual.find({company : company})
       const productMessages = await Promise.all(
        products.map(async (product) =>{
            // const unanswered = await MessageFeedback.findOne({product  : product._id, answered : false}).populate("product", "product_name").exec()
            const unansweredCount = await Message.countDocuments({
                              product: product._id,
                              sender : "user"             
            });
            const totalCount = await Message.countDocuments({product : product._id, sender : "user"})
            const unanswered = await Message.findOne({product : product._id, sender : "user"})

            return {
                ...product.toObject(),
                unansweredCount,
                unanswered,
                totalCount,
                // products
            }
        })
       )
       res.status(200).json({success : true, data : productMessages})
     }catch(err){
        res.status(500).json({ success: false, message: err.message });
     } 
}

exports.singleProductMessages = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        const { id } = req.params;
        const company = await CompanyProfile.findOne({user : user})
        if(!company){
          return res.status(404).json({
            success : false,
            message : "company not found"
          })
        }
        const product = await Manual.findById(id)
        const messageFeedbacks = await Message.find({product : product, sender: "user"})
        res.status(200).json({success : true, data : messageFeedbacks})
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}