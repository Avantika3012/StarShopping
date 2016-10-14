app.controller('AdminProductListController', ['$scope', 'AdminService', function ($scope, AdminService) {
  $scope.products = [];
  AdminService.getProducts($scope.product).then(function (response) {
    console.log(response)
    $scope.products = response.data;
  })
  $scope.test = function() {
    alert('HI');
  }
}])
