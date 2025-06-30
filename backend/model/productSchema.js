const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
    console.log("The Product table has been created or updated.");
  } catch (error) {
    console.error("Error syncing the Product model:", error);
  }
})();

module.exports = Product;
