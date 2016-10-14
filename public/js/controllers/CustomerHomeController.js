app.controller('CustomerHomeController', ['$scope', 'CustomerService', function ($scope, CustomerService) {
  $scope.products = []
  CustomerService.getProducts().then(function (response) {
    $scope.products = response.data
  })
  $scope.buy = function (product) {
    console.log(product)
    $location.path('/buyProduct', product)
  }
}])
