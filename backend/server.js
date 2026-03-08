const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expense");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

// MongoDB connection
mongoose.connect(
"mongodb://admin:admin123@cluster0-shard-00-00.5pw3o7a.mongodb.net:27017,cluster0-shard-00-01.5pw3o7a.mongodb.net:27017,cluster0-shard-00-02.5pw3o7a.mongodb.net:27017/expenseDB?ssl=true&replicaSet=atlas-5pw3o7-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Error:", err));

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
});