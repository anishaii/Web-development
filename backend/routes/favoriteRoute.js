const express = require("express");
const router = express.Router();
const favoriteController = require("../controller/favoriteController");
const verifyToken = require("../middleware/verifyToken");

// Protect all favorite routes
router.post("/add", verifyToken, favoriteController.addToFavorite);
router.get("/", verifyToken, favoriteController.getFavorites);
router.delete("/:productId", verifyToken, favoriteController.removeFromFavorite);

module.exports = router;
