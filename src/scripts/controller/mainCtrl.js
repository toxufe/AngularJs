'use strict';
angular.module('app').controller('mainCtrl', ['$scope','$http', function($scope,$http) {
$http.get('../data/positionList.json')
.then(function(res){
  // console.log(res);
  $scope.list = res.data;
});
}]);
