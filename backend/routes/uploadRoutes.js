const express = require("express");
const upload = require("../middleware/multerConfig");
const { uploadFile } = require("../controller/fileController");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router; // ✅ Export the actual router
