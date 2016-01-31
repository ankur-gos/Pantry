//

var mongoose = require('mongoose');
var Item = require('./Models/item');
var http = require('http');

http.createServer(function (request, response) {
	console.log('hello');
	mongoose.connect('mongodb://jeff:Wow123@candidate.63.mongolayer.com:10410/app46880463/pantry', function(err){
	  if(err) throw err;
	  console.log("connected");
	  var item0 = new Item({
		name: "Eggs",
		category: "Food",
		amountRequested: 10,
		imageimageLink: "http://icons.iconarchive.com/icons/icons8/ios7/512/Food-Eggs-icon.png",
		price: "10.00"

	});

	item0.save(function(err){
		console.log(err);
	});

	var item1 = new Item({
		name: "Toothpaste",
		category: "Health",
		amountRequested: 10,
		imageimageLink: "http://plainicon.com/dboard/userprod/2921_4eb4c/prod_thumb/plainicon.com-60547-256px-de2.png",
		price: "5.00"
	})

	item1.save(function(err){

	});

	var item2 = new Item({
		name: "Floss",
		category: "Health",
		amountRequested: 10,
		imageLink: "http://www.icon100.com/up/4037/128/15-dental-floss.png",
		price: "2.50"
	})

	item2.save(function(err){

	});

	var item3 = new Item({
		name: "Milk",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Milk-Bottle-icon.png",
		price: "7.00"
	});

	item3.save(function(err){

	});

	var item4 = new Item({
		name: "Beans",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Plants-Soy-icon.png",
		price: "4.00"
	});

	item4.save(function(err){

	});

	var item5 = new Item({
		name: "Rice",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://uxrepo.com/static/icon-sets/ocha/png32/512/000000/rice-512-000000.png",
		price: "2.00"
	});

	item5.save(function(err){

	});

	var item6 = new Item({
		name: "Spaghetti",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Food-Spaghetti-icon.png",
		price: "2.50"
	});

	item6.save(function(err){

	});

	var item7 = new Item({
		name: "Apple",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://uxrepo.com/static/icon-sets/windows/png32/512/000000/food-apple-512-000000.png",
		price: "3.25"
	});

	item7.save(function(err){

	});

	var item8 = new Item({
		name: "Tomatoes",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Plants-Tomato-icon.png",
		price: "5.00"
	});

	item8.save(function(err){

	});

	var item9 = new Item({
		name: "Bread",
		category: "Food",
		amountRequested: 10,
		imageLink: "https://d30y9cdsu7xlg0.cloudfront.net/png/13650-200.png",
		price: "3.75"
	});

	item9.save(function(err){

	});

	var item10 = new Item({
		name: "Carrots",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Food-Carrot-icon.png",
		price: "4.50"
	});

	item10.save(function(err){

	});

	var item11 = new Item({
		name: "Cheese",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Food-Cheese-icon.png",
		price: "5.00"
	});

	item11.save(function(err){

	});

	var item12 = new Item({
		name: "Band-aids",
		category: "Health",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Band-Aid-icon.png",
		price: "6.00"
	});

	item12.save(function(err){

	});

	var item13 = new Item({
		name: "Neosporin",
		category: "Health",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/iconsmind/outline/512/First-Aid-icon.png",
		price: "4.30"
	});

	item13.save(function(err){

	});

	var item14 = new Item({
		name: "Chicken",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/ios7/512/Animals-Chicken-icon.png",
		price: "7.25"
	});

	item14.save(function(err){

	});

	var item15 = new Item({
		name: "Butter",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://www.historicfortsnelling.org/a-place-in-time/fortsnelling/img/Store/Icons/butter.png",
		price: "4.40"
	});

	item15.save(function(err){

	});

	var item16 = new Item({
		name: "Pork",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Pig-2-icon.png",
		price: "8.25"
	});

	item16.save(function(err){

	});


	var item18 = new Item({
		name: "Bananas",
		category: "Food",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Banana-icon.png",
		price: "4.25"
	});

	item18.save(function(err){

	});

	var item20 = new Item({
		name: "T-shirt",
		category: "Clothing",
		amountRequested: 10,
		imageLink: "http://uxrepo.com/static/icon-sets/ocha/png32/512/000000/clothing-512-000000.png",
		price: "15.50"
	});

	item20.save(function(err){

	});

	var item21 = new Item({
		name: "Socks",
		category: "Clothing",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/danieledesantis/christmas/512/sock-icon.png",
		price: "7.00"
	});

	item21.save(function(err){

	});

	var item22 = new Item({
		name: "Pants",
		category: "Clothing",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Pants-icon.png",
		price: "17.00"
	});

	item22.save(function(err){

	});

	var item23 = new Item({
		name: "Sweater",
		category: "Clothing",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Clothing-Jacket-icon.png",
		price: "20.00"
	});

	item23.save(function(err){

	});

	var item24 = new Item({
		name: "Pencils",
		category: "Education",
		amountRequested: 10,
		imageLink: "http://uxrepo.com/static/icon-sets/font-awesome/png32/512/000000/pencil-squared-512-000000.png",
		price: "1.00"
	});

	item24.save(function(err){

	});

	var item25 = new Item({
		name: "Notebook",
		category: "Education",
		amountRequested: 10,
		imageLink: "http://uxrepo.com/static/icon-sets/windows/png32/512/000000/paper-512-000000.png",
		price: "1.50"
	});

	item25.save(function(err){

	});
	var item26 = new Item({
		name: "Backpack",
		category: "Education",
		amountRequested: 10,
		imageLink: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Military-Military-Backpack-Radio-icon.png",
		price: "21.00"
	});

	item26.save(function(err){

	});
	
	});
	
}).listen(1337);

