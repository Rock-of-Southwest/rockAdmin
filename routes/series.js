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

//read one
router.get('/:series_title', function(req, res, next){
  Series().select().where('series_title', req.params.series_title).then(function(series){
    res.status(200).send({series: series})
  })
})
//create
router.post('/', function(req, res, next){
  Series().insert({
    series_title: req.body.series_title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    first_date: req.body.first_date,
    last_date: req.body.last_date,
    main_image: req.body.main_image,
    notes_image: req.body.notes_image,
    active: req.body.active
  }).then(function(result){
    res.json(result)
  })
})
//update
router.put('/:series_title', function(req, res, next){
  Series().where('series_title', req.params.series_title).update({
    series_title: req.body.series_title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    first_date: req.body.first_date,
    last_date: req.body.last_date,
    main_image: req.body.main_image,
    notes_image: req.body.notes_image,
    active: req.body.active
  }).then(function(result){
    res.json(result)
  })
})
//delete
router.delete('/:series_title', function(req, res, next){
  Series().where('series_title', req.params.series_title).del().then(function(result){
    res.json(result)
  })
})


module.exports = router;
