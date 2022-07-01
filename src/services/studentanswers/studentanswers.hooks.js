//const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require("./studentans.model");
const validate = require("feathers-validate-joi");
const fetchStudent = require("./hooks/fetchStudent");
const fetchpaperQue = require("./hooks/fetchpaperQue");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchStudent(),
      fetchpaperQue(),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      fetchStudent(),
      fetchpaperQue(),
    ],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
