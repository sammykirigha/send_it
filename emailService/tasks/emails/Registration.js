const db = require("../../db/db");
const ejs = require('ejs')
const config = require('../../Config/config')
const dotenv = require("dotenv")
dotenv.config()
const {sendMail} = require('../helpers/email')

module.exports = async () => {
    const items = await (await db.query("SELECT * FROM user_registration_queue where isSent = 0")).recordset
    console.log("items");
    for(let item of items){
        console.log(item);
        const user = await (await db.query("SELECT * FROM users where id = '" + item.user_id +"'")).recordset[0]
        console.log(user);
        ejs.renderFile('templates/registration.ejs', {username: user.username, email: user.email}, async(error, data) => {
            if(error) console.log(error);;

            const message = {
                from: {
                    name: "SendIT App Services",
                    address: config.username
                },
                to: user.email,
                subject: "Registration Success",
                html: data
            }
            try {
                await sendMail(message)
                await db.query(
                    "Update user_registration_queue set isSent = 1 where id = '" + 
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