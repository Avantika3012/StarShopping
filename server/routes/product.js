var express = require('express')
var router = express.Router()
var ProductService = require('../service/ProductService')

router.post('/save', function (req, res, next) {
  ProductService.saveProduct(req.body, function (err, response) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(response)
  })
})

router.post('/getProducts', function (req, res, next) {
  ProductService.getProducts(req.body, function (err, products) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(products)
  })
})

router.post('/deleteProduct', function (req, res, next) {
  ProductService.deleteProduct(req.body, function (err, products) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send('Product Deleted Successfully!')
  })
})

module.exports = router
