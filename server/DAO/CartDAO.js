var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var CartModel = require('../models/Cart')
var saveCart = function (data, callback) {
  CartModel.findOne({user_id: data.user_id}, function (err, userInCart) {
    if (err) return callback(err)
    if (userInCart) {
      CartModel.findOne({
        user_id: data.user_id,
      products: { '$nin': [data.product_id]} }, function (err, cart) {
        if (cart) {
          cart.products.push(data.product_id)
          cart.save(function (err) {
            if (err) return callback(err)
            callback(null, 'Product saved successfully!')
          })
        } else {
          callback(null, 'Product already added into the cart!')
        }
      })
    } else {
      var carts = new CartModel({
        products: data.product_id,
        user_id: data.user_id
      })
      carts.save(function (err) {
        if (err) return callback(err)
        callback(null, 'Product saved successfully!')
      })
    }
  })

  // CartModel.findOne({
  //   user_id: data.user_id,
  // products: { '$nin': [data.product_id]} }, function (err, cart) {
  //   if (cart) {
  //     if (matchedProduct = cart.products.filter(function (item) {
  //         return item.equals(data.product_id)
  //       }).length) {
  //       cart.products.push(data.product_id)
  //       cart.save(function (err) {
  //         if (err) return callback(err)
  //         callback(null, 'Product saved successfully!')
  //       })
  //     } else {
  //       callback(null, 'Product already added into the cart!')
  //     }
  //   } else {
  //     var carts = new CartModel({
  //       products: data.product_id,
  //       user_id: data.user_id
  //     })
  //     carts.save(function (err) {
  //       if (err) return callback(err)
  //       callback(null, 'Product saved successfully!')
  //     })
  //   }
  // })
}

var getCartDetails = function (data, callback) {
  CartModel
    .find({user_id: data.user_id})
    .populate('products user')
    .exec(function (err, cart) {
      if (err) return callback(err)
      callback(null, cart[0])
    })
}

module.exports = {
  saveCart: saveCart,
  getCartDetails: getCartDetails
}
