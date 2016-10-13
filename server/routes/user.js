var express = require('express')
var router = express.Router()
var UserService = require('../service/UserService')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/register', function (req, res, next) {
  UserService.register(req.body, function (err, data) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(data);
  })
})

router.post('/login', function (req, res, next) {
  UserService.login(req.body, function (err, data) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(data);
  })
})

module.exports = router
