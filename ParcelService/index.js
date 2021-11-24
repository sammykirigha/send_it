const express = require("express");
const dotenv = require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const config = require("./config");
const cors = require("cors");

const id = uuidv4();
console.log({ id });

const app = express();
app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`app listing to port ${PORT}`);
});
