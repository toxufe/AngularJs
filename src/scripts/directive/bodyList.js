'use strict';
angular.module('app').directive('appBodyList',[function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/bodyList.html',
    scope:{
      data:'='
    }
  };
}]);
