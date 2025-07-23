const express = require("express");
const upload = require("../middleware/multerConfig");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.single("image"), addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", upload.single("image"), updateProduct); // Added multer middleware here

module.exports = { productRouter: router };
