const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(5).max(1024).required(),
  phone: Joi.string().min(9).max(10).required(),
  userName: Joi.string().required(),
  password: Joi.string().min(8).max(255).required(),
  isActive: Joi.boolean(),
  isAdmin: Joi.boolean(),
});
module.exports.schema = schema;
