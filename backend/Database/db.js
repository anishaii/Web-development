const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB successfully.");
  } catch (error) {
    console.error("Unable to connect:", error);
  }
};

module.exports = { sequelize, connection };
