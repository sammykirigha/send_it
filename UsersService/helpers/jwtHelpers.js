const jwt = require('jsonwebtoken')

const createdToken = (payload, secretKey, expiresIn) => {
    jwt.sign(payload, secretKey, expiresIn)
}

export default createdToken;