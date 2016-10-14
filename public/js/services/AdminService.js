app.factory('AdminService', [ '$http', function ($http) {
  var AdminService = {}
  AdminService.saveProduct = function (product) {
    return $http.post('/product/save' , product)
  }
  AdminService.getProducts = function (product) {
    return $http.post('/product/getProducts' , product)
  }
  return AdminService
}])
