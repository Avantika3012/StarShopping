app.service('DataService', [ '$http', function ($http) {
  this.getProduct = function () {
    return this.product
  }
  this.setProduct = function (product) {
    this.product = product
  }
}])
