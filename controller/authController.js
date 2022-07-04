const User = require('../models').user
const errorHandler = require('../utils/errorHandler')
const {hashPassword, verifyPassword} = require('../utils/passwordHandler')
const jwt = require('jsonwebtoken')

async function createUser(req, res, next) {
    try {
        const {name, email, password} = req.body

        if(!name) throw new errorHandler(400, "Please input name!")
        if(!email) throw new errorHandler(400, "Please input email")
        if(!password) throw new errorHandler(400, "Please input password")

        const newUser = await User.create({
            name,
            email : email.toLowerCase(),
            password_digest: await hashPassword(password)
        })

        if(!newUser) {
            res.status(400).json({
                status: "FAILED",
                result: {},
                errors: "User failed to create"
            })
        }else{
            res.status(201).json({
                status: "OK",
                result: newUser,
                errors: {}
            })
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function login(req, res, next) {
    try {
        const {email, password} = req.body

        if(!email) throw new errorHandler(400, "Please input email!")
        if(!password) throw new errorHandler(400, "Please input password")

        const findUser = await User.findOne({
            where: {
                email : email.toLowerCase()
            }
        })

        if(!findUser) throw new errorHandler(400, "Your email not registred!")

        const correctPassword = await verifyPassword(password, findUser.password_digest)

        if(!correctPassword) {
            throw new errorHandler(400, "Wrong Password")
        }else{
            const token = jwt.sign({
                id : findUser.id,
                email : findUser.email
            }, process.env.JWT_SECRET)

            res.json({
                status: "OK",
                result : {
                    access_token : token
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
    createUser,
    login
}


