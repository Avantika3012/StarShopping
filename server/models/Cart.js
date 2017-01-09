var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Cart = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports = mongoose.model('Cart', Cart)
