app.controller('LoginController', [
  '$scope',
  '$location',
  'LoginService',
  'localStorageService',
  'toastr',
  function (
    $scope,
    $location,
    LoginService,
    localStorageService,
    toastr) {
    $scope.user = {role: 'Customer'}
    $scope.SelectedForm = {
      type: 'Login'
    }
    $scope.login = function (loginForm) {
      LoginService.login($scope.user).then(function (response) {
        localStorageService.set('User', response.data)
        if ($scope.UserRole.role === 'Admin') {
          $location.path('/adminHomeList')
        } else {
          $location.path('/customerHome')
        }
      })
    }

    $scope.register = function (loginForm) {
      LoginService.register($scope.user).then(function (response) {
        $location.path('/')
      })
    }
  }])
