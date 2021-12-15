const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("./Config/config");
const cors = require("cors");
const cron = require('node-cron')
const regTaskRunner = require('./tasks/emails/Registration')
const departureTaskRunner= require('./tasks/emails/Departure')


const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));


const run = async() => {
    cron.schedule('*/10 * * * * *', async () => {
       await regTaskRunner();
    })

    // cron.schedule('*/10 * * * * *', async () => {
        
    // })
}

const run1 = async()=>{
  cron.schedule('*/10 * * * * *', async() => {
    console.log("running")
    await departureTaskRunner();
 
  });
}

run1()
run();



const PORT = config.port || 4000
app.listen(PORT, () => {
  console.log(`app Listening to port ${PORT}`);
});
