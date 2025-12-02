const Joi = require("joi");

const productValidation = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(1).required(),
  discount: Joi.number().min(0).max(100).default(0),
});

module.exports = { productValidation };
