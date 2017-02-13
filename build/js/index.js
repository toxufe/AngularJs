'use strict';
angular.module('app',['ui.router']);
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	}).state('position',{
		url:'/position/:id',
		templateUrl:'view/position.html',
		controller:'positionCtrl'
	}).state('company',{
		url:'/company/:id',
		templateUrl:'view/company.html',
		controller:'companyCtrl'
	});
	$urlRouterProvider.otherwise('main');
}]);


angular.module('app').config([
    '$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('');
    }
]);

'use strict';
angular.module('app').controller('companyCtrl', ['$scope', function($scope) {
  
}]);

'use strict';
angular.module('app').controller('mainCtrl', ['$scope','$http', function($scope,$http) {
$http.get('../data/positionList.json')
.then(function(res){
  // console.log(res);
  $scope.list = res.data;
});
}]);

'use strict';
angular.module('app').controller('positionCtrl', ['$scope', function($scope) {
  $scope.haha=555;
}]);

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

'use strict';
angular.module('app').directive('appCompany',[function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/company.html',
  };
}]);

'use strict';
angular.module('app').directive('appPositionClass',[function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/positionClass.html'
  };
}]);

'use strict';
angular.module('app').directive('appFoot',[function(){
  return {
    restrict:'A',
    replace:'true',
    templateUrl:'view/template/foot.html'
  }
}]);

'use strict';
angular.module('app').directive('appHead',[function(){
  return {
    restrict:'A',   //利用属性调用指令
    replace:true, //是否替换父级元素
    templateUrl:'view/template/head.html'
  };
}]);

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
