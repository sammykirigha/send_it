const express = require("express");
const helmet = require("helmet");
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

// routes
app.use("/api/v1/parcel", parcelRouter);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`app listing to port ${PORT}`);
});
