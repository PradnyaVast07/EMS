const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  studentId: objectId().required(),
  paperId: objectId().required(),
  status: Joi.string(),
  totalAttempted: Joi.number(),
  totalCorrect: Joi.number(),
  obtainedMarks: Joi.number(),
});
module.exports.schema = schema;
