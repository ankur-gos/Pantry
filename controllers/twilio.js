// twilio.js
// Ankur Goswami

var twilio = require('twilio');

exports.postTwilioMessage = function(req, res){
    var twiml = new twilio.TwimlResponse();
    twiml.say('Hello World')
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
}