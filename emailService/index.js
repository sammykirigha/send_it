const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("./Config/config");
const cors = require("cors");
const cron = require('node-cron')

//task runners
const regTaskRunner = require('./tasks/emails/Registration')
const departureTaskRunner= require('./tasks/emails/Departure')
const arrivalTaskRunner= require('./tasks/emails/Arrival')
const arrivalSMSTaskRunner= require('./tasks/SMS/ParcelArrival')
const departSMSTaskRunner = require('./tasks/SMS/ParcelDeparture').default


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
       await departSMSTaskRunner()
    })

    cron.schedule('*/10 * * * * *', async() => {
      // console.log("running")
      // await departureTaskRunner();
      // await arrivalTaskRunner();
      // await arrivalSMSTaskRunner();
   
    });
}

run();



const PORT = config.port || 4000
app.listen(PORT, () => {
  console.log(`app Listening to port ${PORT}`);
});
