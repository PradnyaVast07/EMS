// studentPapers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const getUserSchema = require("../User/user.schema");
const getPaperschema = require("../Papers/paper.schema");
module.exports = function (app) {
  const modelName = "studentPapers";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    student: {
      type: getUserSchema(app),
      required: true,
    },
    paper: {
      type: getPaperschema(app),

      required: true,
    },
    status: {
      type: String,
    },
    totalAttempted: {
      type: Number,
    },
    totalCorrect: {
      type: Number,
    },
    obtainedMarks: {
      type: Number,
    },
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
