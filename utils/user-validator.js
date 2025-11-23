const joi = require("joi");


const userSchema = joi.object({
  fullname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6)
})

module.exports = {userSchema, loginSchema};
