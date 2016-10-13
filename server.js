// Include the cluster module
var cluster = require('cluster')

// Code to run if we're in the master process
if (cluster.isMaster) {

  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }

  // Listen for dying workers
  cluster.on('exit', function (worker) {
    // Replace the dead worker
    console.log('Worker %d died :(', worker.id)
    cluster.fork()
  })

// Code to run if we're in a worker process
} else {

  // Include Express
  var express = require('express')
  // Create a new Express application
  var app = express()
  var bodyParser = require('body-parser')
  var logger = require('morgan')
  var user = require('./server/routes/user')
  global._baseDirectory  = __dirname + "/";
  app.use(logger('dev'))
  // var mongoose = require('mongoose')

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  // use static files in ROOT/public folder
  app.use(express.static(__dirname + '/public'))

  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    console.log('ERROR');
    res.send('Error ocuured : ', err.message);
    // res.render('error', {
    //   message: err.message,
    //   error: {}
    // })
  })

 

  //Routers
  app.use('/user', user)

  //Creating database connection
  var mongoose   = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/assignment'); 

  // Bind to a port
  var server = app.listen(3000, function () {
    console.log('Worker %d running and listening at localhost:3000', cluster.worker.id)
  })
}
