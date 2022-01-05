const nodemailer = require('nodemailer');
const config = require('../../Config/config')
const dotenv = require("dotenv")
dotenv.config()

 function createTransport(congif){
     let transporter = nodemailer.createTransport(congif)
     return transporter
 }

 const defaultConfig = {
     service: config.service,
     auth: {
         user:config.username,
         pass: config.userpass
     }
 }

 module.exports = {
     sendMail: async (mail) => {
         const transporter = createTransport(defaultConfig);
         await transporter.verify();
         await transporter.sendMail(mail)
     }
 }
