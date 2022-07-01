//const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./paper-question.model");
// const fetchPaper = require("./hooks/fetchpaper");
const fetchQuestion = require("./hooks/fetchQuestion");
const fetchPaper = require("./hooks/fetchpaper");
const validate = require("feathers-validate-joi");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchPaper(),
      fetchQuestion(),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      fetchPaper(),
      fetchQuestion(),
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
