const db = require("../db/db");
const HttpException = require("../utils/httpException");
const { v4: uuidv4 } = require("uuid");
const { validateParcel } = require("../helpers/parcelValidate");

class ParcelController {
  createProject = async (req, res, next) => {
    const { error } = validateParcel(req.body);

    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const {
      description,
      sender_number,
      receiver_number,
      start_location,
      end_location,
      status,
      isCancelled,
      isDelivered,
    } = req.body;

    const id = uuidv4();

    const results = await db.exec("uspCreateParcel", {
      id,
      description,
      sender_number,
      receiver_number,
      start_location,
      end_location,
      status,
      isCancelled,
      isDelivered,
    }).recordsets;

    if (!results) {
      throw new HttpException(500, "Something went wrong");
    }
    res.status(201).send("You successfully created a parcel");
  };
}

module.exports = new ParcelController;
