const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// const cors = require("cors");
app.use(cors({ origin: "*", credentials: true, methods: "GET,POST,PUT,PATCH,DELETE" })); 

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use("/api/manual", require("./routes/manualRoutes"));
app.use("/api/chatbot", require("./routes/chatbotRoutes"));
app.use("/api/purchase", require("./routes/purchaseRoutes"))


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
