const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
    _id: objectId(),
    option: Joi.string(),
    optionText: Joi.string(),
    questionId: objectId().required(),
    isCorrect: Joi.boolean(),
});
module.exports.schema = schema;
