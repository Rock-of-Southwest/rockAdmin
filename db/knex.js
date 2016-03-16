var environment = 'development';

var config = require('../knexfile')[environment];

var knex = require('knex')(config);

module.export = knex;
