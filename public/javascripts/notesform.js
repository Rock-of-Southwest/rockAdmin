angular.module('noteForm', [])

.controller('noteController', function($scope, $http){
  $scope.newNote = {}
  $scope.notes = []
  $scope.sermontitle = $('h2').text()
  $http.get('/api/sermons/'+ $scope.sermontitle + '/notes').then(function(notes){
    $scope.notes = notes.data
  })
  $scope.addNote = function(){
    console.log($scope.notes);
    var note = {
      sermontitle: $scope.sermontitle,
      item_type: $scope.item_type,
      item_text: $scope.item_text,
      item_sequence: $scope.item_sequence
    }
    $scope.notes.push(note)
    $http.post('/addNotes/' + $scope.sermontitle, note).then(function(note){
      console.log(note);
    })
    $scope.reset()
  }
  $scope.reset = function(){
    $scope.item_type= '',
    $scope.item_text= '',
    $scope.item_sequence= ''
  }

  $scope.data = {
      repeatSelect: 2,
      availableOptions: [
        {id: '1', name: 'Main Verse'},
        {id: '2', name: 'Header1'},
        {id: '3', name: 'Header2'},
        {id: '4', name: 'Header3'},
        {id: '5', name: 'Point'},
        {id: '6', name: 'Subpoint'},
        {id: '7', name: 'Comment'},
        {id: '8', name: 'Discussion Question'},
        {id: '9', name: 'Verse'},
        {id: '10', name: 'Verse Text'}
      ],
     };

})
