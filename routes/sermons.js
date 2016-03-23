var express = require('express');
var knex = require('../db/knex');
var router = express.Router();
var moment = require('moment')

function Sermon() {
  return knex('sermon');
}
//read all
router.get('/', function(req, res, next) {
  Sermon().select().then(function(sermon){
    res.status(200).json({sermon: sermon});
  });
});

router.get('/:sermon_title/notes', function(req, res, next){
  return knex.select('*')
    .from('notes')
    .where('sermontitle', req.params.sermon_title).then(function(notes){
      res.json(notes)
  })
})

//read one
router.get('/:sermon_title', function(req, res, next){
  Sermon().select().where('sermon_title', req.params.sermon_title).then(function(sermon){
    res.status(200).send({sermon: sermon})
  })
})
//create
router.post('/', function(req, res, next){
  Sermon().insert({
    seriestitle: req.body.seriestitle,
    order: req.body.order,
    sermon_title: req.body.sermon_title,
    speaker: req.body.speaker,
    video: req.body.video,
    date_delivered: moment(req.body.date_delivered).format('MMM Do YY'),
    active: req.body.active
  }).then(function(result){
    res.json(result)
  })
})
//update
router.put('/:sermon_title', function(req, res, next){
  Sermon().where('sermon_title', req.params.sermon_title).update({
    seriestitle: req.body.seriestitle,
    order: req.body.order,
    sermon_title: req.body.sermon_title,
    speaker: req.body.speaker,
    video: req.body.video,
    date_delivered: req.body.date_delivered,
    active: req.body.active
  }).then(function(result){
    res.json(result)
  })
})
//delete
router.delete('/:sermon_title', function(req, res, next){
  Sermon().where('sermon_title', req.params.sermon_title).del().then(function(result){
    res.json(result)
  })
})


module.exports = router;
