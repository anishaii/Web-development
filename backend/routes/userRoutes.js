const express = require("express");
const{
    getAllEmployee,
    saveAllEmployee,
}= require("../controller/userController");

const router = express.Router();

router.get("/",getAllEmployee);
router.post("/", saveAllEmployee);

module.exports = {router};