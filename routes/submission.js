var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function submission() {
  return knex('submission');
}
//needs to be submissionId eventually
router.get('/:sermonTitle/answers', function(req, res, next) {
  return knex.select('*')
    .innerJoin('noteAnswers', 'noteSubmission.id', 'noteAnswers.submissionId')
    .from('noteSubmission')
    .where('sermontitle', req.params.sermonTitle).then(function(answers){
      res.json(answers)
    })
});



module.exports = router;
