const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  topicName: Joi.string().required(),
  subjectId: objectId(),
});
module.exports.schema = schema;
