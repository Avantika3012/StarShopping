app.controller('CustomersCartController', [
  '$scope',
  'CustomerService',
  'toastr',
  'DataService',
  function (
    $scope,
    CustomerService,
    toastr,
    DataService) {
    CustomerService.getCartDetails().then(function (response) {
      $scope.cartDetails = response.data
    }, function () {})
    console.log('Play')
  }])
