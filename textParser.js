var request = "eggs, milk, pasta";

exports.textParser = function(request, callback)  {
	if (request.indexOf(',') > -1) {
	    var noCommas = request.split(',');
	    callback(noCommas);
	}
}