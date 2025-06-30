const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");


const Users = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync the model (optional for development)
(async () => {
  try {
    await Users.sync();
    console.log("Users table created or updated successfully.");
  } catch (error) {
    console.error("Error syncing Users table:", error.message);
  }
})();

module.exports = Users;
