const express = require("express");
const upload = require("../middleware/multerConfig");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", upload.single("image"), addProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = { productRouter: router };
