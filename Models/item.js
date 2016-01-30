// Ankur Goswami

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
    category: String,
    price: String,
    name: String,
    amountRequested: Number
})

module.exports = mongoose.model('Item', ItemSchema);