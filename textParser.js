var request = "eggs, milk, pasta";

function textParser(var request)  {
	if (request.indexOf(',') > -1) {
	    var noCommas = request.split(',');
	    console.log(noCommas);
	}
}