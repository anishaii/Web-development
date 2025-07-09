const express = require("express");
const { login, init, register } = require("../controller/authController");

const router = express.Router();

router.post("/login", login);  
router.post("/register", register); // POST /api/auth/register
router.get("/init", init);      // GET  /api/auth/init (needs token)

module.exports = { authRouter: router };
