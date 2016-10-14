var ProductDAO = require('../DAO/ProductDAO')

var saveProduct = function (data, callback) {
  ProductDAO.saveProduct(data, callback)
}

var getProducts = function (data, callback) {
  ProductDAO.getProducts(data, function (err, products) {
    if (err) return callback(err)
    products.map(function (product) {
      if (product._doc.discount > 0) {
        product._doc.discountPrice = (product._doc.price - ((product._doc.price * product._doc.discount) / 100))
        return product
      } else {
        return product
      }
    })
    callback(null, products)
  })
}

var deleteProduct = function (data, callback) {
  ProductDAO.deleteProduct(data, callback)
}

module.exports = {
  saveProduct: saveProduct,
  getProducts: getProducts,
  deleteProduct: deleteProduct
}
