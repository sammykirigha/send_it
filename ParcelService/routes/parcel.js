const express = require("express");
const router = express.Router();
const ParcelController = require("../controllers/parcel");
const awaitHandler = require("../middlewares/awaitHandler");

router.get("/createParcel", awaitHandler(ParcelController.createProject));

module.exports = router;
