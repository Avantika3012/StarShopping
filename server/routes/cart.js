var express = require('express'),
  router = express.Router(),
  CartService = require('../service/CartService')

router.post('/addCart', function (req, res) {
  CartService.addCart(req.body, function (err, data) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(data)
  })
})

router.post('/getCartDetails', function (req, res) {
  CartService.getCartDetails(req.body, function (err, data) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(data)
  })
})

module.exports = router;
