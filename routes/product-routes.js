const express = require('express');
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');
const { showProduct } = require('../controllers/products-controller');
const router = express.Router();

router.get("/", showProduct);

module.exports = router;