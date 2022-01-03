const config = require("../../Config/config")
const db = require("../../db/db")

module.exports = async () => {
    try {
        const items = await (await db.query("SELECT * FROM parcels where isSent = 0 ")).recordset
        console.log("items", items);
        const numbers = []

        for(let item of items) {
            const number = [...item.receiver_number.split('\n')]
            numbers.push(number)

        let merged = [].concat.apply([], numbers)

        const credentials = {
            apiKey: config.apiKey,
            username: config.smsusername
        }

        const Africastalking = require('africastalking')(credentials)

        const sms = Africastalking.SMS
        const options = {
            to: [0707256013],
            message: `Hello, your parcel has departed from ${item.start_location} `
        } 

        await sms.send(options).then((response) => {
            db.query("UPDATE parcels SET isSent = 1 WHERE id = '" +item.id +"'")
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
  
    } catch (error) {
        console.log(error);
    }
}