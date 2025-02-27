const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use("/api/manual", require("./routes/manualRoutes"));
app.use("/api/chatbot", require("./routes/chatbotRoutes"));




const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
