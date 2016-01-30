// Ankur Goswami
// 30 January 2016

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var DonatableSchema = new mongoose.Schema({
    address: String,
    numberOfItemsRequested: Number,
    itemsRequested: [ String ]
});

module.exports = mongoose.model('Donatable', DonatableSchema);