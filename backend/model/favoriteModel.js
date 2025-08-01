const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");
const User = require("./userSchema"); 
const Product = require("./productSchema"); 

const Favorite = sequelize.define("Favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// OPTIONAL: Associations (if needed elsewhere)
User.hasMany(Favorite, { foreignKey: "userId" });
Product.hasMany(Favorite, { foreignKey: "productId" });
Favorite.belongsTo(User, { foreignKey: "userId" });
Favorite.belongsTo(Product, { foreignKey: "productId" });

module.exports = Favorite;
