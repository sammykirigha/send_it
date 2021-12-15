const db = require("../../db/db");
const ejs = require('ejs')
const dotenv = require("dotenv")
const sql= require('mssql')
dotenv.config()
const {sendMail} = require('../helpers/email')


module.exports = async () => {
    try {
        const items = await (await db.exec("getParcelArrival")).recordsets[0]
       
        //console.log(items)

        for(let item of items){
            // console.log(item.receiver_email)

    
            ejs.renderFile('templates/arrival.ejs', 
            {parcelid: item.id , endlocation: item.end_location}, 
            async(error, data) => {
                if(error) return
    
                const message = {
                    from: {
                        name: "SendIT App Services",
                        address: process.env.EMAIL_USER
                    },
                    to: item.receiver_email,
                    subject: "Parcel Arrival",
                    html: data
                }
    
                try {
                    await sendMail(message)
                    await db.query("UPDATE parcels SET isDelivered=1 WHERE id= '" + item.id +"'")
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