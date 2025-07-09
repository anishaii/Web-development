const Users = require("../model/userSchema"); // your Sequelize model
const { generateToken } = require("../security/jwt-utils");
const bcrypt = require("bcryptjs")

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required." });
    }

    const user = await Users.findOne({ where: { email } });
    const isPassword = await bcrypt.compare(password, user.password)
    
    if (!isPassword) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = generateToken({ user: user.toJSON() });

    res.status(200).json({
      data: { access_token: token },
      message: "Successfully logged in",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};


const register = async (req, res) => {

  const { name, email } = req.body;  // 
  console.log(req.body)

  try {
    const user = await Users.findOne({ where: { email } });  
    if (user == null) {
      await Users.create(req.body);
      return res.status(201).json({ message: "User added successfully" });
    }
    return res.status(400).json({ message: "User already exists" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error saving user" });
  }
};
const init = async (req, res) => {
  try {
    const user = req.user.user;
    delete user.password; // hide password in response

    res.status(200).json({
      data: user,
      message: "Successfully fetched authenticated user",
    });
  } catch (error) {
    console.error("Init error:", error);
    res.status(500).json({ message: "Server error fetching user" });
  }
};

module.exports = { login, init, register };
