var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    productName: String,
    description: String,
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    discount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);