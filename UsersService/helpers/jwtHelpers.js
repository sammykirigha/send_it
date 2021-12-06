const config = require('../Config/config');
const jwt = require('jsonwebtoken')

module.exports = (id, email, isAdmin) => {
   return jwt.sign({
        id, email, isAdmin
    },config.secretkey, {expiresIn: "24h"} )
}

// const jwt = require('jsonwebtoken')

// module.exports = (email, id, isAdmin) => {
//     return jwt.sign({
//         email, id, isAdmin
//     }, process.env.SECRET_JWT, {expiresIn: "24h"})
// }
