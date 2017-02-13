'use strict';
angular.module('app').directive('appHeadBar',[function(){
  return {
    restrict:'A',   //利用属性调用指令
    replace:true, //是否替换父级元素
    templateUrl:'view/template/headBar.html',
    scope:{
      text:"@"
    },
    link:function(scope){
      scope.back = function(){
        window.history.back();
      }
    }
  };
}]);
