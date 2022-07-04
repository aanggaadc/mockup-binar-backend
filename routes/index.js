const express = require("express");
const ROUTER = express.Router();
const productRoutes = require('./productRoute')
const authRoutes = require('./authRoutes')

ROUTER.use('/v1', productRoutes)
ROUTER.use('/auth', authRoutes)

ROUTER.all("*", (req, res, next) => {
	res.status(404).json({
		error: 404,
		message: `Request URL ${req.path} Not Found`,
	});
});

ROUTER.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	res.status(statusCode).json({
		error: statusCode,
		message: err.message,
	});
});

module.exports = ROUTER