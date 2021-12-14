const db = require("../../db/db");
const ejs = require('ejs')
const dotenv = require("dotenv")
dotenv.config()
const {sendMail} = require('../helpers/email')

module.exports = async () => {
    const items = await db.query("SELECT * FROM dbo.user_registration_queue WHERE isSent = 0")

    for(let item of items){
        const user = await (await db.query("SELECT * FROM dbo.users where id = '" + item.user_id +"'")).recordset[0]
        ejs.renderFile('templates/registration.ejs', 
        {username: user.username, email: user.email}, 
        async(error, data) => {
            if(error) return

            const message = {
                from: {
                    name: "SendIT App Services",
                    address: process.env.EMAIL_USER
                },
                to: user.email,
                subject: "Registration Success",
                html: data
            }

            try {
                await sendMail(message)
                await db.query(
                    "Update dbo.user_registration.queue set isSent = 1 where id = '" + 
                     item.id +
                     "'"
                )
                console.log(`Registration Email sent to ${user.email}`)
            } catch (error) {
                console.log(error);
                console.log(`Coudn't send email to ${user.email}`);
            }
        })
    }
}