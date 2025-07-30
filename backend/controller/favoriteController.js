const Favorite = require("../model/favoriteModel");
const Product = require("../model/productSchema");

const addToFavorite = async (req, res) => {
  const userId = req.user.id; // from token middleware
  const { productId } = req.body;

  try {
    // Check if product exists
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if already favorited
    const existing = await Favorite.findOne({ where: { userId, productId } });
    if (existing) return res.status(400).json({ message: "Already favorited" });

    // Add to favorites
    await Favorite.create({ userId, productId });
    res.status(201).json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFavorites = async (req, res) => {
  const userId = req.user.id;

  try {
    const favorites = await Favorite.findAll({
      where: { userId },
      include: [{ model: Product }],
    });
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeFromFavorite = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;

  try {
    const deleted = await Favorite.destroy({ where: { userId, productId } });
    if (!deleted) {
      return res.status(404).json({ message: "Favorite not found" });
    }
    res.status(200).json({ message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addToFavorite,
  getFavorites,
  removeFromFavorite,
};
