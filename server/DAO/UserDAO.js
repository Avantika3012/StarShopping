var UserModel = require('../models/User')
var register = function (data, callback) {
  var user = new UserModel(data)
  user.save(function (err) {
    if (err) return callback(err)
    callback(null, 'User saved successfully!')
  })
}

var login = function (data, callback) {
  console.log(data);
  UserModel.find(data, function (err, user) {
    if (err) return callback(err)
    callback(null, user)
  })
}

module.exports = {
  register: register,
  login: login
}
