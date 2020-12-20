const Joi = require('joi');

module.exports = Joi.object({
    id: Joi.number()
        .integer()
        .min(1),
    model: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required()
});
