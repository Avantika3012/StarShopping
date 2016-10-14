app.controller('CustomerHomeController', ['$scope', 'CustomerService', '$location', 'DataService', function ($scope, CustomerService, $location, DataService) {
  $scope.products = []
  CustomerService.getProducts().then(function (response) {
    $scope.products = response.data
  })
  $scope.buy = function (product) {    
    DataService.setProduct(product);
    $location.path('/buyProduct', {productName: product.productName})
  }
}])
