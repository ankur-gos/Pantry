// Ankur Goswami
// 30 January 2016

var Item = require('../Models/item');

exports.iterateItem = function(item, amount, next, callback){
    Item.findOne({ name: item }, function(err, item){
        handleItem(err, item, amount, next);
        if(callback)
            callback(item.price);
    })
}

exports.getAllItems = function(req, res, next){
    Item.find(function(err, items){
        if(err){
            next(err);
            return;
        }
        res.json(items);
    })
}

function handleItem(err, item, amount, next){
    if(err){
        next(err);
        return;
    }
    if(item){
        item.amountRequested = item.amountRequested + amount;
        item.save(next);
        return;
    }

    next(new Error("No item found"));
}