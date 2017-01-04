var ProductModel = require('../models/Product')
var saveProduct = function (data, callback) {
  var product = new ProductModel(data)
  product.save(function (err) {
    if (err) return callback(err)
    callback(null, 'Product saved successfully!')
  })
}

var updateProduct = function (data, callback) {
  var product = new ProductModel(data)
  ProductModel.update({_id: data._id}, product, function (err, numAffected) {
    if (err) return callback(err)
    callback(null, 'Product updated successfully!')
  })
}

var getProducts = function (data, callback) {
  ProductModel.find(data, function (err, products) {
    if (err) return callback(err)
    callback(null, products)
  })
}

var deleteProduct = function (data, callback) {
  ProductModel.findByIdAndRemove(data, function (err, products) {
    if (err) return callback(err)
    callback(null, products)
  })
}

module.exports = {
  saveProduct: saveProduct,
  updateProduct: updateProduct,
  getProducts: getProducts,
  deleteProduct: deleteProduct
}
