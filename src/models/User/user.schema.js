const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const { boolean } = require("joi");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true,
      },
      phone: { type: String, minlength: 9, maxlength: 10, required: true },
      userName: { type: String, unique: true },
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
      },
      role: { type: String },

      lastLoggedIn: { type: Date, default: Date.now },
      // isActive: { type: Boolean, default: false },
      isAdmin: {
        type: Boolean,
      },

      updatedBy: { type: objectId },
    },
    { timeStamps: true }
  );

  return schema;
};
