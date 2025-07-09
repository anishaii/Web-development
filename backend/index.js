const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connection } = require("./Database/db");
const { router: userRouter } = require("./routes/userRoutes");
const { authRouter } = require("./routes/authRoutes"); 
const { authenticateToken } = require("./middleware/token-middleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ✅ Apply token middleware globally (after login still works)
app.use(authenticateToken);

// ✅ Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);        
// ✅ Connect to DB
connection();

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
