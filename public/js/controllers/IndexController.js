app.controller('IndexController', ['$scope','$location',function ($scope, $location) {
  $scope.logout = function() {
    $location.path('/');
  }
}]);
