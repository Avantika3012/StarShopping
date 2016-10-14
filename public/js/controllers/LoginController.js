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
        if (response.data === false) {
          return toastr.error('Your credentials are Invalid', 'Error')          
        }
        localStorageService.set('User', response.data)
        toastr.success('Logged-in successfully!')
        $scope.$parent.loginSuccessed()
        if ($scope.user.role === 'Admin') {
          $location.path('/adminHomeList')
        } else {
          $location.path('/customerHome')
        }
      })
    }

    $scope.register = function (loginForm) {
      LoginService.register($scope.user).then(function (response) {
        $scope.user = {role: $scope.user.role}
        toastr.success('Please Login', 'User Registered')
        $scope.SelectedForm.type = 'Login'
      })
    }
  }])
