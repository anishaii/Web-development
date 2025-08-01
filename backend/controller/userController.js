const Users = require("../model/userSchema");
const getAllEmployee = async (req, res) => {
  console.log("Get Alls");

  try {
    const users = await Users.findAll();

    return res.status(200).send({
      data: users,
      message: users.length === 0
        ? "No users found"
        : "Successfully fetched data"
    });

  } catch (error) {
    console.error("Error while fetching:", error);
    return res.status(500).json({ message: "Error while fetching data" });
  }
};

const saveAllEmployee = async (req, res) => {
  const { name, userId } = req.body;  // 
  try {
    const user = await Users.findOne({ where: { userId } });  
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

module.exports = { getAllEmployee, saveAllEmployee };
