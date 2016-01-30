// twilio.js
// Ankur Goswami

var twilio = require('twilio');

exports.postTwilioMessage = function(req, res){
    var text = req.body.Body;
    
    var twiml = new twilio.TwimlResponse();
    twiml.message('Hello World')
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
}