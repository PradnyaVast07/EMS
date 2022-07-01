const { authenticate } = require("@feathersjs/authentication").hooks;
const fetchStudent = require("../student-papers/hooks/fetchstudent");
const fetchPaper = require("../student-papers/hooks/fetchPaper");
const { schema } = require("./student-paper.model");
const validate = require("feathers-validate-joi");
const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchStudent(),
      fetchPaper(),
      hashPassword("password"),
    ],
    update: [hashPassword("password"), fetchStudent(), fetchPaper()],
    patch: [hashPassword("password")],
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
