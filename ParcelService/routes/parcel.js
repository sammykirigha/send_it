const express = require("express");
const router = express.Router();
const ParcelController = require("../controllers/parcel");

router.post("/createParcel", ParcelController.createParcel);
router.get("/", ParcelController.getParcel);
router.get("/:id", ParcelController.getParcelById);
router.put("/update/:id", ParcelController.updateParcel);

module.exports = router;
