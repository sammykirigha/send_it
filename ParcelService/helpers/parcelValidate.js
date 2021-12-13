const Joi = require("joi");

exports.validateParcel = (parcel) => {
  const schema = Joi.object().keys({
    description: Joi.string().required(),
    sender_number: Joi.number().required(),
    receiver_number: Joi.number().required(),
    start_location: Joi.string().required(),
    end_location: Joi.string().required(),
    status: Joi.string().required(),
    isUpdated: Joi.number().required(),
    isDelivered: Joi.number().required(),
    sender_id: Joi.string().required()
  });
  return schema.validate(parcel);
};
