const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
