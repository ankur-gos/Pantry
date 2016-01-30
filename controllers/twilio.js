// twilio.js
// Ankur Goswami

var twilio = require('twilio');
var Text = require('../Models/text');
var donatable = require('./donatable');
var parser = require('../textParser');

exports.postTwilioMessage = function(req, res, next){
    var text = new Text({
        dateSent: req.body.DateCreated,
        number: req.body.From,
        body: req.body.Body
    });
    text.save(function(err){
        handleTextSave(err, req.body.Body, next);
    })
    var twiml = new twilio.TwimlResponse();
    twiml.message('Hello World')
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
}

function handleTextSave(err, textBody, next){
    if(err)
        next(err);
    parser.parseText(textBody, function(items, address){
        donatable.createDonatable(items, address, next);
    })
}