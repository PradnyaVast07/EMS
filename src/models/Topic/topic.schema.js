const getSubjectSchema = require("../Subject/subject.schema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    topicName: { type: String, required: true },
    subject: {
      type: getSubjectSchema(app),
    },
  });
  return schema;
};
