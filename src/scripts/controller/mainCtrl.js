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
