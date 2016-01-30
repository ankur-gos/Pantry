// Ankur Goswami
// 26 November 2015

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var TextSchema = new mongoose.Schema({
    dateSent: String,
    number: String,
    body: String,
})

module.exports = mongoose.model('Text', TextSchema);