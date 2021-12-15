const db = require("../../db/db");
const ejs = require('ejs')
require("dotenv").config()
const config= require('../../Config/config')



module.exports = async () => {
    try {

        const items = await (await db.exec("getParcelArrivalSMS")).recordsets[0]

        const numbers = [];

        for( let item of items){
         const number= [...item.receiver_number.split('\n')]
         numbers.push(number)
          
        }
        let merged = [].concat.apply([], numbers);

        

        for(let item1 of items){

            
        const credentials = {
            apiKey:config.apikey,   
            username:config.username   
        };


        const Africastalking = require('africastalking')(credentials);
        
        const sms = Africastalking.SMS
        const options = {
            to: merged,
            message:"Hello  your parcel has been delivered"
        }
        
        
         await sms.send(options)
            .then( response => {
                 db.query("UPDATE parcels SET isDelivered= 2 WHERE id= '" + item1.id +"'")

                console.log(response);
            })
            .catch( error => {
                console.log(error);
            });


        }

        



            
                
    } catch (error) {

        console.log( error)
        
    }
    




    

    
}