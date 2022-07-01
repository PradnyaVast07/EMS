const getQuestionSchema = require("../Question/question.schema");
const getPaperschema = require("../Papers/paper.schema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    paper: { type: getPaperschema(app), required: true },
    serialNumber: {
      type: Number,
    },
    question: {
      type: getQuestionSchema(app),
      required: true,
    },
  });
  return schema;
};
