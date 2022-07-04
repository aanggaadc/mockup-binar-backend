const {compare} = require('bcrypt')
const {hash} = require('bcrypt')

const hashPassword = async (password) => {
    return await hash(password, 10)
}

const verifyPassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword)
}

module.exports = {
    hashPassword,
    verifyPassword
}