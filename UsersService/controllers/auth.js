const db = require('../db/db')
const Joi = require('joi')
const {v4: uuidv4} = require("uuid")
const { validateUser } = require('../helpers/userValidate')
const EncryptedData  = require('../helpers/encrypt')
const passport = require('passport')

module.exports = {
    loginUser: async (req, res) => {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },

    regiterUser: async (req, res) => {
       const {error} = validateUser(req.body)
       if(error) return res.status(400).send({success: false, message: error.details[0].message})

       const {recordset} = await db.exec('getUserByEmail', {email: req.body.email})

       const user = recordset[0]

       if(user) return res.status(400).send({message: "Account exists with the given email"})

       const password = EncryptedData.generateHash(req.body.password)

       const {username, full_name, tel_number, email, isAdmin} = req.body
       const id = uuidv4()
       const admin = isAdmin ? 1 : 0

       try {
           await db.exec('uspCreateUser', {
               id,
               username,
               full_name,
               tel_number,
               email,
               password,
               isAdmin: admin
           })
           res.status(201).send({message: "Account created successfully"})
       } catch (error) {
           console.log(error);
           res.status(500).send({message: 'Internal Server Error'})
       }
    }
}
