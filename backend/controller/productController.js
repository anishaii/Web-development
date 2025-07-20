const Product = require("../model/productSchema");
const path = require("path");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      message: "Fetched products successfully",
      data: products,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !price || !quantity || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProduct = await Product.create({
      name,
      price,
      quantity,
      image,
    });

    res.status(201).json({
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });

    if (!deleted)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = name || product.name;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;

    await product.save();
    res.status(200).json({ message: "Product updated", data: product });
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// ✅ EXPORT ALL HERE
module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
