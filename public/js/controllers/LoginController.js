app.controller('LoginController', ['$scope','$location','LoginService', function ($scope, $location, LoginService) {
  $scope.user = {}
  $scope.UserRole = {
    role: 'Customer'
  }
  $scope.SelectedForm = {
    type: 'Login'
  }
  $scope.login = function (loginForm) {
    LoginService.login($scope.user).then(function (response) {
      if ($scope.UserRole.role === 'Admin') {
        $location.path('/adminHomeList')
      } else {
        $location.path('/customerHome')
      }     
    })
  }

  $scope.register = function (loginForm) {
    LoginService.register($scope.user).then(function (response) {
      console.log(response)
    // $location.path('/search')
    })
  }
}])
