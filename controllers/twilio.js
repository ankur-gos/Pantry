// twilio.js
// Ankur Goswami

var twilio = require('twilio');
var text = require('../Models/text');

exports.postTwilioMessage = function(req, res, next){
    var text = new Text({
        dateSent: req.body.DateCreated,
        number: req.body.From,
        body: req.body.Body
    });
    text.save(function(err){
        if(err)
            next(err);
    })
    text.save
    var twiml = new twilio.TwimlResponse();
    twiml.message('Hello World')
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
}