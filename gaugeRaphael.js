var angularDemo = angular.module('angularDemo', ['angular-raphael-gauge']);
var options = {
              name: false,  // text under gauge
              value: 25,    // value
              image: false, // path to image (should be square) - it will be under gauge
              text: false,  // text in the middle of gauge
              textColor: '#000000', // text color
              arcColor: '#57E0EA',  // animated arc color
              bgArcColor: '#000',   // round background under arc
              opacity: false,   // arc opacity
              duration: 1600,   // animation duration
              easing: 'bounce' // Raphael easing effect. Don't use backIn or Elastic, they mess up animation :/
            };

angularDemo.controller('DemoCtrl', ['$scope', function ($scope) {
  $scope.gauge = {
          name: "Counting Steps",
          opacity: 0.55,
          value: 50,
          text: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7', 'Step 8', 'Step 9', 'Step 10']
        };
        if ($scope.gauge.value == 50){
          $scope.gauge.text = "Step 5";
        }
}]);
