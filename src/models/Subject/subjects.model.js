module.exports = function (app) {
  const modelName = "subjects";
  const mongooseClient = app.get("mongooseClient");
  const schema = require("./subject.schema")(app);
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
