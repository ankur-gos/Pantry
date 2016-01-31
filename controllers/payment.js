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
                        handleRemoveDonatableItem(item, address, req.body.token, priceString, number, next);
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
    console.log(req.body.items);
    if(!req.body.items || !req.body.token){
        return false
    }
    return true
}

function handleRemoveDonatableItem(item, address, token, priceString, number, next){
    var price = parseFloat(priceString, 10);
    price = price * 100;
    charge(price, token, item, function(err){
        if(err){
            next(err);
            return;
        }
        twilio.sendConfirmText(number, item, next);
        emailSender.sendConfirmationEmail(address, item);
    });
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