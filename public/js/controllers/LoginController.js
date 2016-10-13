app.controller('LoginController', function ($scope, LoginService) {
  $scope.user = {};
   $scope.color = {
        name: 'Customer'
      };
  $scope.login = function (loginForm) {
    LoginService.login($scope.user).then(function (response) {
      console.log(response)
      //$location.path('/search')
    })
  }

  $scope.register = function (loginForm) {
    LoginService.register($scope.user).then(function (response) {
      console.log(response)
      //$location.path('/search')
    })
  }

})
