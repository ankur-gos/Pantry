// MODULE
var myApp = angular.module('myApp', ['stripe']).config(function(){
    Stripe.setPublishableKey('pk_test_THvHsOWpkIuiLs0wD3NSKIFj')
});

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$http',  function ($scope, $filter, $http) {
    $scope.class = "Choose a class above.";
    $scope.loadedItems;
    $scope.testing = {};

    $scope.listOfItems = [];
    $scope.cartItemObjects = [];
    $scope.cartPrice = 0;
    $scope.filtering ;
    $scope.categories = ['Food', 'Health', 'Clothing', 'Education' ];

    $scope.innerList = function(index){
        console.log(index);
        $scope.filtering = $scope.categories[index];
        console.log($scope.filtering);
        $scope.objects = $filter('filter')($scope.items[0], "Food");
        console.log($scope.objects);
    };

    $scope.addItem = function(index, product){
        //console.log(index);
        //console.log(arr[index]);

        //item name list

        $scope.listOfItems.push(product.name);
        console.log($scope.listOfItems);

        //item object list
        $scope.cartItemObjects.push(product);
        //console.log(cartItemObjects);

        //CART PRICE CHANGE
        var productPrice = parseFloat(product.price, 10);
        $scope.cartPrice += productPrice;
    };

    $scope.close = function(index, product) {
        console.log("close " + index);
        //$scope.listOfItems = listOfItems.splice(index, 1);
        //console.log(listOfItems);  

        // //CART PRICE CHANGE
        var productPriceMinus = parseFloat(product.price, 10);
        $scope.cartPrice -= productPriceMinus;  
        console.log(productPriceMinus);     

        //var index1 = $scope.listOfItems.indexOf(product);
        $scope.listOfItems.splice(index, 1);
        $scope.cartItemObjects.splice(index, 1);

        console.log($scope.listOfItems);              
    };

    $scope.saveCustomer = function(status, response) {
        $http.post('https://glacial-inlet-76332.herokuapp.com/api/v1/payment', { token: response.id, items: $scope.listOfItems});
    };

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