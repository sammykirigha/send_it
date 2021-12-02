const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("./Config/config");
const cors = require("cors");
const userRouter = require('./routes/users')

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

app.use('api/v1', userRouter)


const PORT = config.port
app.listen(PORT, () => {
  console.log(`app Listening to port ${PORT}`);
});
