const db = require("../../db/db");
const ejs = require('ejs')
const dotenv = require("dotenv")
const sql= require('mssql')
dotenv.config()
const {sendMail} = require('../helpers/email')


module.exports = async () => {
    try {
        const items = await (await db.exec("getParcel")).recordsets[0]
       


        for(let item of items){
            // console.log(item.receiver_email)

    
            ejs.renderFile('templates/departure.ejs', 
            {parcelid: item.id, startlocation: item.start_location, endlocation: item.end_location}, 
            async(error, data) => {
                if(error) return
    
                const message = {
                    from: {
                        name: "SendIT App Services",
                        address: process.env.EMAIL_USER
                    },
                    to: item.receiver_email,
                    subject: "Parcel Departure",
                    html: data
                }
    
                try {
                    await sendMail(message)
                    const pid= item.id
                    await db.query("UPDATE parcels SET status='sent1' WHERE id= '" + item.id +"'")
                    console.log(`Registration Email sent to ${item.receiver_email}`)
                } catch (error) {
                    console.log(error);
                    console.log(`Coudn't send email to ${item.receiver_email}`);
                }
            })
        }




        
    } catch (error) {

        console.log( error)
        
    }
    




    

    
}