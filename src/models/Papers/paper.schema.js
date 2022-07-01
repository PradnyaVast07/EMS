const getSubjectSchema = require("../Subject/subject.schema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    PaperName: { type: String, required: true },
    subject: {
      type: getSubjectSchema(app),
      required: true,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
  });
  return schema;
};
