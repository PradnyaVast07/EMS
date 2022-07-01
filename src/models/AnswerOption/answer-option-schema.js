const getQuestionschema = require("../Question/question.schema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    option: { type: String, required: true },

    optionText: {
      type: String,
    },
    question: {
      type: getQuestionschema(app),
      required: true,
    },
    isCorrect: {
      type: Boolean,
    },
  });
  return schema;
};
