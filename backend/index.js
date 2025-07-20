const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connection } = require("./Database/db");
const { router: userRouter } = require("./routes/userRoutes");
const { authRouter } = require("./routes/authRoutes"); 
const { authenticateToken } = require("./middleware/token-middleware");
const uploadRouter = require("./routes/uploadRoutes");
const { createUploadsFolder } = require("./security/helper");
const { productRouter } = require("./routes/ProductRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create uploads folder at startup
createUploadsFolder();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());




// ✅ Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// ✅ Protected routes
app.use("/api/users", authenticateToken, userRouter); // 🔐 Only protect sensitive routes

// ✅ Routes

app.use("/api/auth", authRouter); 
app.use("/api/file", uploadRouter);   
app.use("/api/products", productRouter);    
// ✅ Connect to DB
connection();

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
