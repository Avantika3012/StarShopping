app.service('DataService', [ '$http', function ($http) {
  this.getProduct = function (x) {
    return this.product
  }
  this.setProduct = function (product) {
    this.product = product
  }
}])
