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
        itemController.iterateItem(req.body.item, -1, next, function(priceString){
            donatable.removeDonatableItem(req.body.item, next, function(item, address, number){
                handleRemoveDonatableItem(item, address, req.body.stripeToken, priceString, number, next);
            });
        });
    } else{
        res.statusCode(400);
        next(new Error("Bad request"));
    }
}

function checkValidRequest(req){
    if(!req.body.item || !req.body.stripeToken){
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
        amount: amound, // amount in cents, again
        currency: "usd",
        source: token,
        description: description
    }, function(err, charge) {
        completionHandler(err);
    });
}