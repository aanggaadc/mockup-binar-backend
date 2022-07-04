const {product} = require('../controller')
const express = require("express");
const ROUTER = express.Router();

ROUTER.post('/products', product.createProduct)
ROUTER.get('/products/:id', product.getProductById)
ROUTER.get('/products', product.getAllProduct)
ROUTER.put('/products/:id', product.updateProduct)
ROUTER.delete('/products/:id', product.deleteProduct)

module.exports = ROUTER