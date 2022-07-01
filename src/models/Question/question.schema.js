const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const getTopicSchema = require("../Topic/topic.schema");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    text: {
      type: String,
      required: true,
    },
    topic: {
      type: getTopicSchema(app),
      required: true,
    },
    questionNumber: {
      type: Number,
    },

    marks: {
      type: Number,
    },
    complexityLevel: {
      type: String,
    },
    correctOption: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
  });
  return schema;
};
