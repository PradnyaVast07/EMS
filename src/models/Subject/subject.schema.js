module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
  });
  return schema;
};
