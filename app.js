var angularDemo = angular.module('angularDemo', ['angular-raphael-gauge']);


angularDemo.controller('DemoCtrl', ['$scope', function ($scope) {
  $scope.gauge = {
          name: 'Some name',
          opacity: 0.55,
          value: 65,
          text: 'some cool text'
        };
}]);
