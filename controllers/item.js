// Ankur Goswami
// 30 January 2016

var Item = require('../Models/item');

exports.iterateDonatable = function(item, amount, next){
    Item.findOne({ name: item }, function(err, item){

    })
}

function handleItem(err, item, amount, next){
    if(err){
        next(err);
        return;
    }

    item.amountRequested = item.amountRequested + amount;
    item.save(next);
}