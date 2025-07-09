const jwt = require("jsonwebtoken");
const Users = require("../model/userSchema");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  // Allow login and signup without token
  if (
    req.path === "/api/auth/login" ||
    (req.path === "/api/auth/register" && (req.method === "POST" || req.method === "GET"))|| "api/Users"
  ) {
    return next();
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { authenticateToken };
