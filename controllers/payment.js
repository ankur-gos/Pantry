// payment.js
// Ankur Goswami

var stripe = require("stripe")("sk_test_WwPOmU2pxRtIncI2lz6XDVWF");
var Item = require('../Models/item');
var itemController = require('./item');
var donatable = require('./donatable');
var twilio = require('./twilio');
var emailSender = require('../EmailSender');

exports.chargeAccount = function(req, res, next){
    if(checkValidRequest(req)){
        for(var i = 0; i < req.body.items.length; ++i){
            itemController.iterateItem(req.body.items[i], -1, i, next, function(priceString, preservedIndex){
                var flag = false;
                donatable.removeDonatableItem(req.body.items[preservedIndex], next, function(item, address, number){
                    if(!flag){
                        calculateAndCharge(req.body.items, address, req.body.token, priceString, number, next);
                    }
                    flag = true;
                });
            });
        }
    } else{
        res.statusCode(400);
        next(new Error("Bad request"));
    }
}

function checkValidRequest(req){
    if(!req.body.items || !req.body.token){
        console.log(req.body.items);
        return false
    }
    return true
}

function calculateCharge(items, callback){
    Item.find({name: {$in : items}}, function(err, items){
        console.log("4");
        var total = 0;
        for(var i = 0; i < items.length; i++){
            var price = parseFloat(items[i].price, 10);
            price = price * 100;
            total = total + price;
        }
        callback(err, total)
    });
}

function calculateAndCharge(items, address, token, priceString, number, next){
    calculateCharge(items, function(err, total){
        if(err){
            console.error(err);
            next(err);
            return;
        }
        charge(total, token, items.join(", "), function(err){
            if(err){
                console.error(err);
                next(err);
                return;
            }
        });
    })
}

function charge(amount, token, description, completionHandler){
    var charge = stripe.charges.create({
        amount: amount, // amount in cents, again
        currency: "usd",
        source: token,
        description: description
    }, function(err, charge) {
        completionHandler(err);
    });
}