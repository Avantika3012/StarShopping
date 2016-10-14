app.controller('BuyProductController', [
  '$scope',
  '$location',
  'product' ,
  'toastr',
  function (
    $scope,
    $location,
    product,
    toastr) {
    $scope.product = product
    $scope.validateQuatity = function () {
      if ($scope.product.enteredQuantity > $scope.product.quantity) {
        var num = $scope.product.enteredQuantity;
        $scope.product.enteredQuantity = 0;
        return toastr.error('Quanity' + num + 'is not available', 'Invalid')

      }
    }
  }])
