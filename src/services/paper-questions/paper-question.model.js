const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  paperId: objectId(),
  serialNumber: Joi.number().required(),
  questionId: objectId(),
});
module.exports.schema = schema;
