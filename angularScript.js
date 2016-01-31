// MODULE
var myApp = angular.module('myApp', ['stripe']).config(function(){
    Stripe.setPublishableKey('sk_test_WwPOmU2pxRtIncI21z6XDVWF')
});

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.class = "Choose a class above.";
    $scope.loadedItems;
    $scope.testing = {};

    var listOfItems = [];
    var cartItemObjects = [];
    var cartPrice = 0;

    $scope.categories = ['Food', 'Health', 'Clothing', 'Education' ];

    $scope.innerList = function(index){
        console.log(index);
        $scope.filtering = $scope.categories[index];
        console.log($scope.filtering);
        $scope.objects = $filter('filter')($scope.items[0], "Food");
        console.log($scope.objects);
    }

    $scope.addItem = function(index, arr, product){
        //console.log(index);
        //console.log(arr[index]);

        //item name list

        $scope.listOfItems = listOfItems.push(product.name);
        console.log(listOfItems);

        //item object list
        $scope.cartItemObjects = cartItemObjects.push(product);
        //console.log(cartItemObjects);
        var productPrice = parseFloat(product.price, 10);
        productPrice += productPrice;
    }

    $scope.saveCustomer = function(status, response) {
        $http.post('/api/v1/payment', { token: response.id, items: $scope.listOfItems});
    };

    $scope.items = {"item":[
        {"itemName":"Bread", "count":10, "category": "food"},
        {"itemName":"Toothpaste", "count":12, "category": "hygiene"},
        {"itemName":"Condoms", "count":13, "category": "misc."},
        {"itemName":"Socks", "count":4, "category": "clothing"},
        {"itemName":"Eggs", "count":5, "category": "food"},
        {"itemName":"Milk", "count":6, "category": "food"},
        {"itemName":"Blankets", "count":17, "category": "clothing"},
        {"itemName":"Cereal", "count":8, "category": "food"},
        {"itemName":"Spoons", "count":9, "category": "misc."},
        {"itemName":"Chips", "count":10, "category": "food"},
        {"itemName":"Snacks", "count":11, "category": "food"},
        {"itemName":"Medicine", "count":12, "category": "hygiene"},
        {"itemName":"Shirts", "count":13, "category": "clothing"},
        {"itemName":"money", "count":14, "category": "misc."}

    ]};




    $scope.value = '';
        $scope.init = function(){
            console.log("lookup is working");
            $.ajax({
                url: 'http://glacial-inlet-76332.herokuapp.com/api/v1/items',
                type: 'GET',
                // dataType:'json',
                dataType: 'json',
                crossDomain: true,
                 xhrFields: {   
                    withCredentials: false,
                 },
                 headers: {
                    'Access-Control-Allow-Origin': '*'
                },  
                success: function (json) {
                    console.log("Ankur's json");
                    console.log(json);
                    $scope.$apply(function(){
                        $scope.value = json;
                    });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("error getting values data!");
                },
            });
        };

    // $scope.init = function () {
    //     $scope.loadedItems = $scope.value;
// };

}]);