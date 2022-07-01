const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  questionNumber: Joi.number(),
  text: Joi.string().required(),
  topicId: objectId().required(),
  marks: Joi.number(),
  complexityLevel: Joi.string(),
  correctOption: Joi.string(),
  isActive: Joi.boolean(),
});
module.exports.schema = schema;
