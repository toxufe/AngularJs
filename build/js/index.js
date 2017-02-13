'use strict';
angular.module('app',['ui.router']);
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	}).state('position',{
		url:'/position:id',
		templateUrl:'view/position.html',
		controller:'positionCtrl'
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
angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
  $scope.list = [{
          id:1,
          job: '销售',
          imgSrc: 'image/company-3.png',
          city: '上海',
          company: '千度',
          jobGroup: '互联网',
          date: '2017-01-11'
      },
      {
          id :2,
          job: 'PHP',
          imgSrc: 'image/company-1.png',
          city: '北京',
          company: '百度',
          jobGroup: '大数据',
          date: '2017-01-10'
      },
      {
          id :3,
          job: '产品经理',
          imgSrc: 'image/company-2.png',
          city: '内蒙古',
          company: '伊利牧场',
          jobGroup: '产品研发',
          date: '2016-01-10'
      }];
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
