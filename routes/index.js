var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('login');
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.post('/login', function (req, res, next) {
  if (req.body.user == 'Admin'){
    res.redirect('/sermonsAdmin')
  } else {
    res.redirect('/sermons')
  }
  console.log(req.body.user);
})

router.get('/sermons', function(req, res, next){
  knex.select('*')
  .from('sermon')
  .then(function(sermons){
    res.render('sermons', {sermons:sermons})
  }).catch(function(error){
    console.log(error);
  })
})

router.get('/sermonsAdmin', function(req, res, next){
  knex.select('*')
  .from('sermon')
  .then(function(sermons){
    res.render('sermonsAdmin', {sermons:sermons})
  }).catch(function(error){
    console.log(error);
  })
})

router.get('/sermons/:sermon_title', function(req, res, next){
  return knex.join('series', 'sermon.seriestitle', 'series.series_title')
  .first('*')
  .where('sermon_title', req.params.sermon_title)
  .from('sermon')
  .then(function(sermon){
    return knex.select('*').leftJoin('noteAnswers', 'notes.id', 'noteAnswers.noteId').where('notes.sermontitle', sermon.sermon_title).from('notes').orderBy('notes.id')
    .then(function(notes){
      console.log(notes);
      res.render('oneSermon',  {sermon:sermon, notes:notes})
    })
  }).catch(function(error){
    console.log(error);
  })
})

router.post('/sermons/:sermon_title', function(req, res, next){
  knex.first('*')
    .from('noteSubmission')
    .where('sermontitle', req.params.sermon_title).then(function(submission){
      if (submission){
        return submission.id
      } else {
        return knex.insert ({sermontitle: req.params.sermon_title}, 'id').into('noteSubmission')
      }
    }).then(function(submissionID){
      if (submissionID instanceof Array){
        submissionID = submissionID[0]
      }
      console.log('submission: ', submissionID);
      return Promise.all(_.map(req.body, function(answer, noteId){
        return upsertAnswer(noteId, answer, submissionID)
      }))
    }).then(function(){
      res.redirect('/sermons/' + req.params.sermon_title)
    })
})

function upsertAnswer(noteId, answer, submissionId){
  return knex.first('*')
    .from('noteAnswers')
    .where('submissionId', submissionId)
    .andWhere('noteId', noteId).then(function(noteAnswers){
      if (noteAnswers){
        return knex.update({answer:answer}, 'id').from('noteAnswers')
        .where('submissionId', submissionId)
        .andWhere('noteId', noteId)
      } else {
        return knex.insert({noteId: noteId, answer:answer, submissionId:submissionId}, 'id').into('noteAnswers')
      }
    }).then(function (answerid){
      console.log('Answer: ', answerid);
    })
}

module.exports = router;


router.get('/', function(req, res, next) {
  Sermon().select().then(function(sermon){
    res.status(200).json({sermon: sermon});
  });
});
