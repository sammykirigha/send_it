const express = require("express");
const router = express.Router();
const ParcelController = require("../controllers/parcel");
const awaitHandler = require("../middlewares/awaitHandler");

router.get("/createParcel", awaitHandler(ParcelController.createProject));
router.get("/getParcel", ParcelController.getParcel);
router.get("/parc/:id", ParcelController.getParcelById);
router.put("/update/:id", ParcelController.updateParcel)

module.exports = router;
