var sermonTitle = $('h1').text()

console.log(sermonTitle);

$.get('/api/submission/' + sermonTitle +'/answers').done(function(answers){
  console.log(answers);
  for (var i=0; i<answers.length; i++){
    $('[name='+ answers[i].noteId + ']').val(answers[i].answer)
  }
})
