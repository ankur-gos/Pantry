// EmailSender.js
// Ankur Goswami

var aws = require('aws-sdk');

exports.sendConfirmationEmail = function(address, item){
	aws.config.loadFromPath('config.json');
	var ses = new aws.SES({apiVersion: '2012-12-01'});
	var to = ['agoswam3@ucsc.edu'];

	var from = 'agoswam3@ucsc.edu';

	ses.sendEmail({
		Source: from,
		Destination: { ToAddresses: to },
		Message: {
			Subject: {
				Data: 'Order Confirmation'
			},
			Body: {
				Text: {
					Data: 'Send address: ' + address + '\nitem: ' + item
				}
			}
		}
	}, function (err, data){
		if (err) throw err
		console.log('Email sent\n');
		console.log(data)
	})
}