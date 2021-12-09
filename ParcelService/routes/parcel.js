const express = require("express");
const router = express.Router();
const ParcelController = require("../controllers/parcel");
const awaitHandler = require("../middlewares/awaitHandler");

router.post("/createParcel", ParcelController.createProject);
router.get("/", ParcelController.getParcel);
router.get("/:id", ParcelController.getParcelById);
router.put("/update/:id", ParcelController.updateParcel);

module.exports = router;
