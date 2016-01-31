// Ankur Goswami
// 30 January 2016

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var DonatableSchema = new mongoose.Schema({
    address: String,
    number: String,
    numberOfItemsRequested: Number,
    itemsRequested: [ String ]
});

module.exports = mongoose.model('Donatable', DonatableSchema);