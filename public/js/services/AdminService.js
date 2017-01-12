app.factory('AdminService', [ '$http', 'localStorageService', function ($http, localStorageService) {
  var AdminService = {}

  AdminService.uploadImage = function (file) {
    return $http.post('/product/upload', {data: {file: file}}, {
      headers: { 'content-type': 'multipart'}
    })
  }

  AdminService.saveProduct = function (product) {
    product.companyName = localStorageService.get('User').companyName    
    return $http.post('/product/save', product)
  }
  AdminService.getProducts = function (product) {
    product.companyName = localStorageService.get('User').companyName
    return $http.post('/product/getProducts' , product)
  }

  AdminService.deleteProduct = function (product) {
    return $http.post('/product/deleteProduct' , {
      _id: product._id
    })
  }

  return AdminService
}])
