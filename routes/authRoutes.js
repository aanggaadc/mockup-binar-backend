const {user} = require('../controller')
const express = require('express')
const ROUTER = express.Router()

ROUTER.post('/signup', user.createUser)
ROUTER.post('/login', user.login)

module.exports = ROUTER