var request = "eggs, milk, pasta";

exports.parseText = function(request, callback)  {
	if (request.indexOf(',') > -1) {
        var splitOnColon = request.split(':');
        if(splitOnColon.length != 2)
            throw new Error("Multiple colons found");
        parseAddress(splitOnColon, callback)
	}
}

function parseAddress(splitArray, callback){
    var address = splitArray[1];
    address = address.trim();
    console.log("1");
    handleAddressParser(splitArray[0], address, callback);
    console.log("3");
}

function handleAddressParser(items, address, callback){
    var newItems = items.split(',');
    var splitItems = []
    console.log("2");
    for(var i = 0; i < newItems.length; i++){
        splitItems.push(newItems[i].split(' '));
    }
    var unfiltered = [].concat.apply([], splitItems);
    callback(unfiltered.filter(function(value){
        if(value !== ""){
            return true;
        }
    }), address)
    console.log("4");
}