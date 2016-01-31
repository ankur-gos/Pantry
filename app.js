// app.js
// Ankur Goswami

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors')

var twilioController = require('./controllers/twilio');
var itemController = require('./controllers/item');
var paymentController = require('./controllers/payment');

var app = express();

mongoose.connect('mongodb://jeff:Wow123@candidate.63.mongolayer.com:10410/app46880463/pantry', function(err){
  if(err) throw err;
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

app.use(cors());

app.route('/api/v1/twilio')
  .post(twilioController.postTwilioMessage);

app.route('/api/v1/items')
  .get(itemController.getAllItems);

app.route('/api/v1/payment')
  .post(paymentController.chargeAccount);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    app.set('view engine', 'jade');
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;