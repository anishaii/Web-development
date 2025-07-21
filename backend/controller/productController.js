const Product = require("../model/productSchema");

// ✅ ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body; // 🔄 Removed productId
    const image = req.file ? req.file.filename : null;

    // 🔄 Updated validation
    if (!name || !price || !quantity || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 🔄 Removed productId uniqueness check
    const newProduct = await Product.create({
      name,
      price,
      quantity,
      image,
    });

    return res.status(201).json({
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Product.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, quantity } = req.body; // 🔄 Removed productId
    const image = req.file ? req.file.filename : null;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 🔄 Removed product.productId = ...
    product.name = name || product.name;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;
    if (image) product.image = image;

    await product.save();

    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
