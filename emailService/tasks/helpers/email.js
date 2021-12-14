const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
dotenv.config()

 function createTransport(congif){
     let transporter = nodemailer.createTransport(congif)
     return transporter
 }

 const defaultConfig = {
     servive: process.env.SERVICE,
     auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS
     }
 }

 module.exports = {
     sendMail: async (mail) => {
         const transporter = createTransport(defaultConfig);
         await transporter.verify();
         await transporter.sendMail(mail)
     }
 }
