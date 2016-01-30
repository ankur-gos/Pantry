// Ankur Goswami
// 30 January 2016

var Donatable = require('../Models/donatable');

exports.createDonatable = function(items, address, next){
    Donatable.findOne({ address: address }, function(err, donatable){
        handleFindDonatable(err, donatable, items, address, next);
    })
}

function handleFindDonatable(err, donatable, items, address, next){
    if(err)
        throw err
    if(!donatable){
        handleNoDonatable(items, address, next);
        return;
    }

    for(var i = 0; i < items.length; i++){
        donatable.itemsRequested.push(items[i]);
        donatable.numberOfItemsRequested = donatable.numberOfItemsRequested + 1;
    }

    donatable.save(next);
}

function handleNoDonatable(items, address, next){
    var donatable = new Donatable({
        address: address,
        numberOfItemsRequested: items.length,
        itemsRequested: items
    });

    donatable.save(next);
}