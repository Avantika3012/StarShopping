// Include Express
var express = require('express')
// Create a new Express application
var app = express()
var bodyParser = require('body-parser')
var logger = require('morgan')
var user = require('./server/routes/user')
var product = require('./server/routes/product')
var cart = require('./server/routes/cart')
global._baseDirectory = __dirname + '/'
app.use(logger('dev'))
// var mongoose = require('mongoose')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) { // allow cross origin requests
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET')
  res.header('Access-Control-Allow-Origin', 'http://localhost')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// use static files in ROOT/public folder
app.use(express.static(__dirname + '/public'))

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  console.log('ERROR')
  res.send('Error ocuured : ', err.message)
// res.render('error', {
//   message: err.message,
//   error: {}
// })
})

global.basePath = __dirname

// Routers
app.use('/user', user)
app.use('/product', product)
app.use('/cart', cart)

// Creating database connection
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/assignment')

// Bind to a port
var server = app.listen(3000, function () {
  console.log('Server listening at localhost:3000')
})
