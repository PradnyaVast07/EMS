const { authenticate } = require("@feathersjs/authentication").hooks;
// const Joi = require("joi");
// const validate = require("feathers-validate-joi"); 
// const { schema } = require("./user.model");

const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [hashPassword("password")],
    update: [hashPassword("password")],
    patch: [hashPassword("password")],
    remove: [],
  },

  after: {
    all: [protect("password")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
