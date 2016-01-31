// twilio.js
// Ankur Goswami

var accountSid = 'AC5b212daceee8f1df75f5daf1d66ecc24';
var authToken = 'd5ccf345abee59f1cbc06ca348b7118c';
var fromNumber = '+17073879836';
var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
var Text = require('../Models/text');
var donatable = require('./donatable');
var parser = require('../textParser');
var item = require('../controllers/item');

exports.postTwilioMessage = function(req, res, next){
    var text = new Text({
        dateSent: req.body.DateCreated,
        number: req.body.From,
        body: req.body.Body
    });
    text.save(function(err){
        handleTextSave(err, req.body.Body, req.body.From, next);
    })
    var twiml = new twilio.TwimlResponse();
    twiml.message('Message received. You\'ll be notified of your order approval');
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
}

function handleTextSave(err, textBody, number, next){
    if(err)
        next(err);
    parser.parseText(textBody, function(items, address){
        donatable.createDonatable(items, address, number, next);
        for(var i = 0; i < items.length; i++){
            item.iterateItem(items[i], 1, 0, next);
        }
    })
}

exports.sendConfirmText = function(number, item, next){
    client.messages.create({
        to: number,
        from: fromNumber,
        body: 'Your order of ' + item + ' has been ordered'
    }, function(error, message){
        if(error)
            next(error);
    });
}