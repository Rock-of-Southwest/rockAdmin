var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Notes() {
  return knex('notes');
}

router.get('/', function(req, res, next) {
  Notes().select().then(function(notes){
    res.status(200).send({notes: notes});
  });
});

module.exports = router;
