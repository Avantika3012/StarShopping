app.factory('CustomerService', [ '$http', 'localStorageService', function ($http, localStorageService) {
  var CustomerService = {}
  CustomerService.getProducts = function (product) {
    return $http.post('/product/getProducts' , product)
  }
  CustomerService.getCartDetails = function () {
    return $http.post('/cart/getCartDetails' , {
      user_id: localStorageService.get('User')._id
    })
  }
  CustomerService.addToCart = function (product) {
    return $http.post('/cart/addCart' , {
      user_id: localStorageService.get('User')._id,
      product_id: product._id
    })
  }
  return CustomerService
}])
