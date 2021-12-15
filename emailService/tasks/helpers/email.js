const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
dotenv.config()

 function createTransport(congif){
     let transporter = nodemailer.createTransport(congif)
     return transporter
 }

 const defaultConfig = {
     service: process.env.SERVICE,
    // host:process.env.HOST,
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
