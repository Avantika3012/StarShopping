var ProductDAO = require('../DAO/ProductDAO')

var saveProduct = function (data, callback) {
  ProductDAO.saveProduct(data, callback)
}

var getProducts = function (data, callback) {
  ProductDAO.getProducts(data, callback)
}

module.exports = {
  saveProduct: saveProduct,
  getProducts: getProducts
}
