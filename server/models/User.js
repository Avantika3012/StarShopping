var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    username: String,
    password: String,
    role: String,
    companyName: { type: String, default: '' }
});

module.exports = mongoose.model('User', UserSchema);