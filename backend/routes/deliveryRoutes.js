const express = require('express');
const router = express.Router();
const { addDeliveryInfo } = require('../controller/deliveryController');

router.post('/', addDeliveryInfo);

module.exports = router;
