const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");

const Product = sequelize.define("Product", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    image: {
    type: DataTypes.STRING,
    allowNull: true,  
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

(async () => {
  try {
    await Product.sync();  
    console.log(" Product table synced successfully!");
  } catch (error) {
    console.error("Error syncing table:", error);
  }
})();

module.exports = Product;
