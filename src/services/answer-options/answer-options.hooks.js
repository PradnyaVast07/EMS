//const { authenticate } = require('@feathersjs/authentication').hooks;
const { schema } = require("./anser-option.model");
const validate = require("feathers-validate-joi");
const fetchQuestion = require("./hooks/fecthquestion");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false }), fetchQuestion()],
    update: [validate.form(schema, { abortEarly: false }), fetchQuestion()],
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
