var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Series() {
  return knex('series');
}

router.get('/', function(req, res, next) {
  Series().select().then(function(series){
    res.status(200).send({series: series});
  });
});

module.exports = router;
