app.controller('AdminProductController', ['$scope', 'AdminService', function ($scope, AdminService) {
  $scope.product = {}
  $scope.saveProduct = function () {
    AdminService.saveProduct($scope.product).then(function (response) {
      console.log(response);
    })
  }
}])
