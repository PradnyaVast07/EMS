module.exports = function (app) {
  const modelName = "topic";
  const mongooseClient = app.get("mongooseClient");

  const schema = require("./topic.schema")(app);

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
