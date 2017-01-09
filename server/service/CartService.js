var CartDAO = require('../DAO/CartDAO')
var addCart = function (data, callback) {
  CartDAO.saveCart(data, callback)
}
var getCartDetails = function (data, callback) {
  CartDAO.getCartDetails(data, callback)
}
module.exports = {
  addCart: addCart,
  getCartDetails: getCartDetails
}
