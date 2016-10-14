app.controller('IndexController', ['$scope', '$location', 'localStorageService', function ($scope, $location, localStorageService) {
  $scope.getUserRole = function () {
    return localStorageService.get('User').role
  }
  if (localStorageService.get('User')) {
    $scope.loggedIn = true
    $scope.userRole = $scope.getUserRole()
  }

  $scope.loginSuccessed = function() {
    $scope.loggedIn = true;
    $scope.userRole = $scope.getUserRole()
  }

  $scope.logout = function () {
    $scope.loggedIn = null;
    $scope.userRole = null;
    localStorageService.clearAll()
    $location.path('/')
  }
}])
