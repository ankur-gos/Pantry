// Ankur Goswami
// 30 January 2016

var Donatable = require('../Models/donatable');
var twilio = require('./twilio');
var emailSender = require('../EmailSender');

exports.createDonatable = function(items, address, number, next){
    Donatable.findOne({ address: address }, function(err, donatable){
        handleFindDonatable(err, donatable, items, address, number, next);
    })
}

function handleFindDonatable(err, donatable, items, address, number, next){
    if(err)
        throw err
    if(!donatable){
        handleNoDonatable(items, address, number, next);
        return;
    }

    for(var i = 0; i < items.length; i++){
        donatable.itemsRequested.push(items[i]);
        donatable.numberOfItemsRequested = donatable.numberOfItemsRequested + 1;
    }

    donatable.save(function(err){
        if(err){
            console.error(err);
            next(err);
        }
    });
}

function handleNoDonatable(items, address, number, next){
    var donatable = new Donatable({
        address: address,
        numberOfItemsRequested: items.length,
        itemsRequested: items,
        number: number
    });

    donatable.save(function(err){
        if(err){
            console.error(err);
            next(err);
        }
    });
}

exports.removeDonatableItem = function(item, next, callback){
    Donatable.find(function(err, donatables){
        handleRemoveDonatableItem(err, donatables, item, next, callback);
    })
}

function handleRemoveDonatableItem(err, donatables, item, next, callback){
    if(err){
        next(err);
        return;
    }
    for(var i = 0; i < donatables.length; i++){
        var items = donatables[i].itemsRequested;
        if(items.indexOf(item) > -1){
            console.log(items.filter(function(value){
                if(value != item){
                    return true;
                }
            }))
            donatables[i].itemsRequested = items.filter(function(value){
                if(value != item){
                    return true;
                }
            });
            donatables[i].save(function(err){
                next(err);
                return;
            })
            twilio.sendConfirmText(donatables[i].number, item, next);
            emailSender.sendConfirmationEmail(donatables[i].address, item);
            callback(item, donatables[i].address, donatables[i].number)
            break;
        }
    }
}