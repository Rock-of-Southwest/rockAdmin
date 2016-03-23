var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var _ = require('lodash')
var moment = require('moment')

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
    for (var i=0; i<sermons.length; i++){
      sermons[i].date_delivered = moment(sermons[i].date_delivered).format('MMMM Do YY')
    }
    res.render('sermons', {sermons:sermons})
  }).catch(function(error){
    console.log(error);
  })
})

router.get('/sermonsAdmin', function(req, res, next){
  knex.select('*')
  .from('sermon')
  .then(function(sermons){
    for (var i=0; i<sermons.length; i++){
      sermons[i].date_delivered = moment(sermons[i].date_delivered).format('MMMM Do YY')
    }
    res.render('sermonsAdmin', {sermons:sermons})
  }).catch(function(error){
    console.log(error);
  })
})

router.get('/editsermon/:sermontitle', function(req, res, next){
  return knex.first('*')
    .from('sermon')
    .where('sermon_title', req.params.sermontitle).then(function(sermon){
      sermon.date_delivered = moment(sermon.date_delivered).format('YYYY-MM-DD')
      return knex.select('*')
        .from('series').then(function(series){
          res.render('editsermon', {series:series, sermon:sermon});
        })
  })
})

router.post('/editsermon/:sermontitle', function(req, res, next){
  return knex.update(req.body)
    .from('sermon')
    .where('sermon_title', req.params.sermontitle)
    .then(function(){
    res.redirect('/sermonsAdmin')
    console.log(req.body);
    console.log(req.params.sermontitle);
  }).catch(function(error){
    console.log(error);
    res.render('error', {
      error: error
    })
  })
})

router.get('/addNotes/:sermontitle', function(req, res, next){
  console.log(req.params);
  return knex.first('*')
    .from('sermon')
    .where('sermon_title', req.params.sermontitle).then(function(sermon){
      res.render('addNotes', {sermon:sermon});
      console.log(sermon);
  })
})


router.get('/newsermon', function(req, res, next){
  return knex.select('*')
    .from('series').then(function(series){
      res.render('newsermon', {series:series});
  });
})

router.post('/newsermon', function(req, res, next){
  console.log(req.body);
  return knex.insert(req.body).into('sermon').then(function(){
    res.redirect('addNotes/' + req.body.sermon_title)
  }).catch(function(error){
    console.log(error);
    res.render('error', {
      error: error
    })
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
