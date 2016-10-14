app.controller('IndexController', ['$scope','$location',function ($scope, $location) {
  $scope.loggedIn = true;
  $scope.logout = function() {
    $location.path('/');
  }
}]);
