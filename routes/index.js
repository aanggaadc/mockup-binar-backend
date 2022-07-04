const express = require("express");
const ROUTER = express.Router();
const productRoutes = require('./productRoute')

ROUTER.use('/v1', productRoutes)

module.exports = ROUTER