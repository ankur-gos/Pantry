var request = "eggs, milk, pasta";

exports.textParser = function(request, callback)  {
	if (request.indexOf(',') > -1) {
        var splitOnColon = request.split(':');
        if(splitOnColon.length != 2)
            throw new Error("Multiple colons found");
        addressParser(splitOnColon, handleAddressParser, callback)
	}
}

function addressParser(splitArray, callback, topCallback){
    var address = splitArray[1];
    address = address.trim();
    callback(splitArray[0], address, topCallback);
}

function handleAddressParser(items, address, callback){
    var newItems = items.split(',');
    var splitItems = []
    for(var i = 0; i < newItems.length; i++){
        splitItems.push(newItems[i].split(' '));
    }
    var unfiltered = [].concat.apply([], splitItems);
    callback(unfiltered.filter(function(value){
        if(value !== ""){
            return true;
        }
    }), address)
}