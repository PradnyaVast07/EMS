const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  PaperName: Joi.string().required(),
  subjectId: objectId().required(),
  totalMarks: Joi.number(),
});
module.exports.schema = schema;
