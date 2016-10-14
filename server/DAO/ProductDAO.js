var ProductModel = require('../models/Product')
var saveProduct = function (data, callback) {
  var product = new ProductModel(data)
  product.save(function (err) {
    if (err) return callback(err)
    callback(null, 'Product saved successfully!')
  })
}

var getProducts = function (data, callback) {  
  ProductModel.find(data, function (err, products) {
    if (err) return callback(err)
    callback(null, products)
  })
}

module.exports = {
  saveProduct: saveProduct,
  getProducts: getProducts
}
