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
const multer = require("multer");
const Favorite = require("./model/favoriteModel");
const deliveryRouter = require('./routes/deliveryRoutes');

const { sequelize } = require("./Database/db");
sequelize.sync().then(() => {
  console.log("All models synced successfully.");
});

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

const favoriteRoutes = require("./routes/favoriteRoute");
app.use("/api/favorites", favoriteRoutes);

// Create uploads folder at startup
createUploadsFolder();

app.use('/api/delivery', deliveryRouter);






// ✅ Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// ✅ Protected routes
app.use("/api/users", authenticateToken, userRouter); // 🔐 Only protect sensitive routes

// ✅ Routes

app.use("/api/auth", authRouter); 
app.use("/api/file", uploadRouter);   
app.use("/api/products", productRouter); 

// *** NEW: Multer error handling middleware ***
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  }
  next(err);
});


// ✅ Connect to DB
connection();

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
