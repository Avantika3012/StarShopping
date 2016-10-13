app.service('LoginService', [ '$http', function ($http) {
  var loginService = {}
  loginService.login = function (user) {
    return $http.post('/user/login' , {
      username: user.username,
      password: user.password
    })
  }
  loginService.register = function (user) {
    return $http.post('/user/register' , {
      username: user.usernameForRegister,
      password: user.passwordForRegister
    })
  }
  return loginService
}])
