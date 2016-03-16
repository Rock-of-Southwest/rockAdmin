var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Sermon() {
  return knex('sermon');
}

router.get('/', function(req, res, next) {
  Sermon().select().then(function(sermon){
    res.status(200).send({sermon: sermon});
  });
});

module.exports = router;
