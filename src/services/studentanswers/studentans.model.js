const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  studentId: objectId().required(),
  paperQueId: objectId().required(),
  answer: Joi.string(),
  isCorrect: Joi.boolean(),
});
module.exports.schema = schema;
