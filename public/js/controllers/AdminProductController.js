app.controller('AdminProductController', ['$scope', 'AdminService', 'toastr', function ($scope, AdminService, toastr) {
  $scope.product = {}
  $scope.saveProduct = function () {
    AdminService.saveProduct($scope.product).then(function (response) {  
      toastr.success('Product Added Successfully!');
      $scope.product = {}
    })
  }
}])
