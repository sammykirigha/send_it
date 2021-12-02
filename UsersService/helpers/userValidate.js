const Joi = require('joi')

exports.validateUser = (user) => {
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        full_name: Joi.string().required(),
        tel_number: Joi.number().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        isAdmin: Joi.boolean().required()
    })

    return schema.validate(user)
}