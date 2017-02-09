'use strict';
angular.module('app',['ui.router']);
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	});

	$urlRouterProvider.otherwise('main');
}]);


// angular.module('app').config([  
//     '$locationProvider',
//     function($locationProvider) {
//         $locationProvider.hashPrefix('');
//     }
// ]);
'use strict';
angular.module('app').controller('mainCtrl',['$scope',function($scope){

}]);
'use strict';
angular.module('app').directive('appHead',[function(){
  return {
    restrict:'A',   //利用属性调用指令
    replace:true, //是否替换父级元素
    templateUrl:'view/template/head.html'
  };
}]);
