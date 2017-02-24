angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

  $scope.package = mainSrv.findPackage($stateParams.id)
  console.log($scope.package)

  $scope.obj = {"background": "url(" + $scope.package.image + ") no-repeat center center / cover"}

  

})
