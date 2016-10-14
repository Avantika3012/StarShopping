app.controller('AdminProductListController', [
  '$scope',
  'AdminService',
  'toastr',
  'DataService',
  function (
    $scope,
    AdminService,
    toastr,
    DataService) {
    $scope.products = []
    $scope.product = {}
    AdminService.getProducts($scope.product).then(function (response) {
      $scope.products = response.data
    })
    $scope.deleteProduct = function (product, index) {
      AdminService.deleteProduct(product).then(function (response) {
        toastr.success('Product Deleted Successfully!')
        $scope.products.splice(index, 1)
      })
    }
    $scope.editProduct = function (product) {
      DataService.setProduct(product)
      $location.path('/adminHomeList')
    }
  }])
