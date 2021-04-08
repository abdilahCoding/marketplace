// VALIDATION
const Joi = require("joi");

// Register validation
const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
    .min(2)
    .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
      adress: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};


// Login Seller validation
const loginSellerValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports ={registerValidation,loginSellerValidation};