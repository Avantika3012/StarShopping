app.factory('CustomerService', [ '$http', function ($http) {
  var CustomerService = {}
  CustomerService.getProducts = function (product) {
    return $http.post('/product/getProducts' , product)
  }
  return CustomerService
}])
