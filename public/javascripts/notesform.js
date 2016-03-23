angular.module('noteForm', [])

.controller('noteController', function($scope, $http){
  $scope.newNote = {}
  $scope.notes = []
  $scope.sermontitle = $('h2').text()
  $http.get('/api/sermons/'+ $scope.sermontitle + '/notes').then(function(notes){
    $scope.notes = notes.data
  })
  $scope.data = {
      repeatSelect: 2,
      availableOptions: [
        {id: '1', name: 'Main Verse'},
        {id: '2', name: 'Header1'},
        {id: '3', name: 'Header2'},
        {id: '4', name: 'Header3'},
        {id: '5', name: 'Point'},
        {id: '6', name: 'Subpoint'}
        {id: '7', name: 'Comment'}
        {id: '6', name: 'Discussion Question'}
        {id: '6', name: 'Verse'}
        {id: '6', name: 'Verse Text'}

      ],
     };

})
