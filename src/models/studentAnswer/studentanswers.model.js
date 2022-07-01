// studentanswers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const getStudentschema = require("../Student/student.schema");
const getPaperschema = require("../Paper-Question/paperQue.schema");

module.exports = function (app) {
  const modelName = "studentanswers";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      student: {
        type: getStudentschema(app),
        required: true,
      },
      paperQue: {
        type: getPaperschema(app),
        required: true,
      },
      answer: {
        type: String,
      },
      isCorrect: {
        type: Boolean,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
