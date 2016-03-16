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

//read one
router.get('/:id', function(req, res, next){
  Notes().select().where('id', req.params.id).then(function(notes){
    res.status(200).send({notes: notes})
  })
})
//create
router.post('/', function(req, res, next){
  Notes().insert({
    id: req.body.id,
    sermontitle: req.body.sermontitle,
    item_type: req.body.item_type,
    item_sequence: req.body.item_sequence,
    item_text: req.body.item_text
  }).then(function(result){
    res.json(result)
  })
})
//update
router.put('/:id', function(req, res, next){
  Notes().where('id', req.params.id).update({
    sermontitle: req.body.sermontitle,
    item_type: req.body.item_type,
    item_sequence: req.body.item_sequence,
    item_text: req.body.item_text
  }).then(function(result){
    res.json(result)
  })
})
//delete
router.delete('/:id', function(req, res, next){
  Notes().where('id', req.params.id).del().then(function(result){
    res.json(result)
  })
})


module.exports = router;
