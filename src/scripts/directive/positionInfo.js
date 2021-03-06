'use strict';
angular.module('app').directive('appPositionInfo',[function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/positionInfo.html',
    scope:{
      isActive:"="
    },
    link:function(scope){
      scope.imgPath = scope.isActive?'image/star-active.png':'image/star.png';
    }
  };
}]);
