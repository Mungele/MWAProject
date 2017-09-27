var mongoose = require('mongoose');  
var TransactionSchema = new mongoose.Schema({
        uname: String,
        email: String,
        paymentType: String,
        amount: Number,
        cart:Object

});
mongoose.model('Transaction', TransactionSchema);

module.exports = mongoose.model('Transaction');