var sermonTitle = $('h1').text()

console.log(sermonTitle);

$('[data-id]').each(function() {
  var $this = $(this)
  console.log($this.text())
  var text = $this.text()
  var id = $this.data('id')
  var newText = text.replace(/__+/g, '<input name="' + id + '"/>')
  $this.html(newText)
  console.log($this.data('id'))
})

$.get('/api/submission/' + sermonTitle +'/answers').done(function(answers){
  console.log(answers);
  for (var i=0; i<answers.length; i++){
    $('[name='+ answers[i].noteId + ']').val(answers[i].answer)
  }
})
