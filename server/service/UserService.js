var UserDAO = require('../DAO/UserDAO')

var register = function (data, callback) {
  UserDAO.register(data, callback)
}

var login = function (data, callback) {
  UserDAO.login(data, function (err, data) {
    if (err) callback(err)
    if (data.length) 
        callback(null, true)
    else
        callback(null, false)
  })
}

module.exports = {
  register: register,
  login: login
}
