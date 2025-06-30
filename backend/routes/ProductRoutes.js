const express = require("express");
const { getAllProducts } = require("../controller/productController");

const router = express.Router();

router.get("/products", getAllProducts);

module.exports = { productRouter: router };
