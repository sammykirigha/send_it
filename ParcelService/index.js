const express = require("express");
const helmet = require("helmet");
require('dotenv').config()
const morgan = require("morgan");
const config = require("./config");
const cors = require("cors");
const parcelRouter = require("./routes/parcel");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

// console.log({env: process.env});


// routes
app.use("/parcel", parcelRouter);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`app Listening to port ${PORT}`);
});
