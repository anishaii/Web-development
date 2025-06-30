const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connection } = require("./Database/db.js");
const { router } = require("./routes/userRoutes.js");
const { productRouter } = require("./routes/ProductRoutes.js"); // if used

// Load environment variables from .env
dotenv.config();

const app = express();

// CORS setup to allow frontend (React at localhost:5173)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use(router);
app.use(productRouter); // optional

// DB Connection
connection();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
