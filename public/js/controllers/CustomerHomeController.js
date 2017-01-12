app.controller('CustomerHomeController', [
  '$scope', 
  'CustomerService', 
  '$location', 
  'DataService',
  'toastr',
  function (
    $scope, 
    CustomerService, 
    $location, 
    DataService,
    toastr) {
  $scope.products = []
  CustomerService.getProducts().then(function (response) {
    $scope.products = response.data
  })
  $scope.buy = function (product) {
    DataService.setProduct(product)
    $location.path('/buyProduct', {productName: product.productName})
  }

  $scope.addToCart = function (product) {
    CustomerService.addToCart(product).then(function (response) {
      toastr.success(response.data)
    })
  }
}])
