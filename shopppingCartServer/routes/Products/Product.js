var mongoose = require('mongoose');  
var ProductSchema = new mongoose.Schema({
        name: String,
        category: String,
        quantity: Number,
        availability: Boolean,
        details:String,
        price: Number

});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');