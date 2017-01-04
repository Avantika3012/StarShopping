app.controller('AdminProductController', [
  '$scope',
  'AdminService',
  'toastr',
  'DataService',
  function (
    $scope,
    AdminService,
    toastr,
    DataService) {
    if (DataService.getProduct()) {
      $scope.isEdit = true
      $scope.product = DataService.getProduct()
    } else {
      $scope.product = {}
    }

    $scope.saveProduct = function () {
      if ($scope.isEdit)
        $scope.product.isEdit = true
      AdminService.saveProduct($scope.product).then(function (response) {
        toastr.success('Product Added Successfully!')
        $scope.product = {}
      })
    }
  }])
