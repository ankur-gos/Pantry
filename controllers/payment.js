// payment.js
// Ankur Goswami

var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");
var Item = require()
var itemController = require('./item');
var donatable = require('./donatable');

exports.chargeAccount = function(req, res, next){
    if(checkValidRequest(req)){
        itemController.iterateItem(req.body.item, -1, next, callback(priceString){
            donatable.removeDonatableItem(req.body.item, next, function(item, address){
                handleRemoveDonatableItem(item, address, req.body.stripeToken, priceString, next);
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

function handleRemoveDonatableItem(item, address, token, priceString, next){
    var price = parseFloat(priceString, 10);
    price = price * 100;
    charge(price, token, item, next);
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