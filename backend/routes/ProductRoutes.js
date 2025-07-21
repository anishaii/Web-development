const express = require("express");
const upload = require("../middleware/multerConfig");  // multer config imported
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/", getAllProducts);

// *** UPDATED: Added multer middleware upload.single("image") to parse file upload ***
router.post("/", upload.single("image"), addProduct);

router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = { productRouter: router };
