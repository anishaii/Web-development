const jwt = require("jsonwebtoken");           // Import JWT package
require("dotenv").config();                    // Load .env variables

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });  
  // Sign the payload with the secret key and set token to expire in 1 hour
};

module.exports = { generateToken };           // Export for use in controller
