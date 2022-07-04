const Product = require('../models').product
const errorHandler = require('../utils/errorHandler')

async function createProduct(req, res, next) {
    try {
        const {name, price , imageurl} = req.body

        if(!name) throw new errorHandler(400, "Please Input Product Name!!")
        if(!price) throw new errorHandler(400, "Please Input Price!! ")
        if(!imageurl) throw new errorHandler(400, "Please Input Image URL")

        const newProduct = await Product.create ({
            name,
            price,
            imageurl
        })

        if(!newProduct) throw new errorHandler(400, "Product Failed to Create!")

        res.status(201).json({
            status: "OK",
            result: newProduct
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getProductById(req,res,next) {
    const id = req.params.id
    try {
        const findProduct = await Product.findByPk(id)

        if(!findProduct){
            res.status(404).json({
                status: "OK",
                result: {},
                errors : "Product Not Found"
            })
        }else{
            res.status(200).json({
                status: "OK",
                result: findProduct,
                errors : {}
            })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getAllProduct(req,res,next) {
    try {
         const findAllProduct = await Product.findAll()

         if(!findAllProduct) {
            res.status(200).json({
                status: "OK",
                result: [],
                errors: "Something Wrong"
            })
         }else{
            res.status(200).json({
                status: "OK",
                result: findAllProduct,
                errors: {}
            })
         }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function updateProduct(req, res, next) {
    const id = req.params.id
    try {
        const {name, price, imageurl } = req.body
        const findProduct = await Product.findByPk(id)

        if(!findProduct) throw new errorHandler(404, "Product Nof Found")

        const updateProduct = await findProduct.update({
            name,
            price,
            imageurl
        })

        if(!updateProduct) {
            res.status(400).json({
                status: "FAILED",
                result: {},
                errors: "Product Failed to Update"
            })
        }else {
            const productUpdated = await Product.findByPk(id)

            res.status(200).json({
                status: "OK",
                result: productUpdated,
                errors: {}
            })
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function deleteProduct(req, res, next) {
    const id = req.params.id
    try {
        const findProduct = await Product.findByPk(id)

        if(!findProduct) throw new errorHandler(404, "Product Not Found")

        const productDelete = await findProduct.destroy()

        if(!productDelete){
            res.status(400).json({
                status: 'FAILED',
                result: {},
                errors: "Product Failed to Delete"
            })
        }else {
            res.status(200).json({
                status: "OK",
                result: {
                    message: `${id} deleted`
                },
                errors: {}
            })
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createProduct,
    getProductById,
    getAllProduct,
    updateProduct,
    deleteProduct
}