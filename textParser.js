var request = "eggs, milk, pasta";

exports.textParser = function(var request)  {
	if (request.indexOf(',') > -1) {
	    var noCommas = request.split(',');
	    console.log(noCommas);
	}
}