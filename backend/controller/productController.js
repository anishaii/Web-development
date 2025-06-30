const Product = require("../model/productSchema");

const getAllProducts = async (req, res) => {
  console.log("Fetching all products...");

  try {
    const products = await Product.findAll();

    return res.status(200).send({
      data: products,
      message: products.length === 0
        ? "No products found"
        : "Successfully fetched products"
    });

  } catch (error) {
    console.error("Error while fetching products:", error);
    return res.status(500).json({ message: "Error while fetching products" });
  }
};

module.exports = { getAllProducts };
