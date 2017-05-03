angular
  .module("guageModule", [])
  .controller("guageCTRL", guageCTRL);

function guageCTRL($scope){
  $scope.hi = "hello";
}
