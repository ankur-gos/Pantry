// Ankur Goswami
// 30 January 2016

var Item = require('../Models/item');

exports.iterateItem = function(item, amount, itemIterator, next, callback){
    Item.findOne({ name: item }, function(err, item){
        handleItem(err, item, amount, next);
        if(callback)
            callback(item.price, itemIterator);
    })
}

exports.getAllItems = function(req, res, next){
    Item.find(function(err, items){
        if(err){
            console.error(err);
            next(err);
            return;
        }
        res.json(items);
    })
}

function handleItem(err, item, amount, next){
    if(err){
        console.error(err);
        next(err);
        return;
    }
    if(item){
        item.amountRequested = item.amountRequested + amount;
        item.save(function(err){
            if(err){
                console.error(err);
                next(err);
                return;
            }
            console.log(item);
            if(!err){
                console.log("Item added");
            }
        });
        return;
    }

    next(new Error("No item found"));
}