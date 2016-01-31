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
		amountRequested: 0,
		price: "10.00"
	});

	item0.save(function(err){
		console.log(err);
	});

	var item1 = new Item({
		name: "Toothpaste",
		category: "Health",
		amountRequested: 0,
		price: "5.00"
	})

	item1.save(function(err){

	});

	var item2 = new Item({
		name: "Floss",
		category: "Health",
		amountRequested: 0,
		price: "2.50"
	})

	item2.save(function(err){

	});

	var item3 = new Item({
		name: "Milk",
		category: "Food",
		amountRequested: 0,
		price: "7.00"
	});

	item3.save(function(err){

	});

	var item4 = new Item({
		name: "Beans",
		category: "Food",
		amountRequested: 0,
		price: "4.00"
	});

	item4.save(function(err){

	});

	var item5 = new Item({
		name: "Rice",
		category: "Food",
		amountRequested: 0,
		price: "2.00"
	});

	item5.save(function(err){

	});

	var item6 = new Item({
		name: "Spaghetti",
		category: "Food",
		amountRequested: 0,
		price: "2.50"
	});

	item6.save(function(err){

	});

	var item7 = new Item({
		name: "Applesauce",
		category: "Food",
		amountRequested: 0,
		price: "3.25"
	});

	item7.save(function(err){

	});

	var item8 = new Item({
		name: "Cabbage",
		category: "Food",
		amountRequested: 0,
		price: "5.00"
	});

	item8.save(function(err){

	});

	var item9 = new Item({
		name: "Bread",
		category: "Food",
		amountRequested: 0,
		price: "3.75"
	});

	item9.save(function(err){

	});

	var item10 = new Item({
		name: "Carrots",
		category: "Food",
		amountRequested: 0,
		price: "4.50"
	});

	item10.save(function(err){

	});

	var item11 = new Item({
		name: "Cheese",
		category: "Food",
		amountRequested: 0,
		price: "5.00"
	});

	item11.save(function(err){

	});

	var item12 = new Item({
		name: "Band-aids",
		category: "Health",
		amountRequested: 0,
		price: "6.00"
	});

	item12.save(function(err){

	});

	var item13 = new Item({
		name: "Neosporin",
		category: "Health",
		amountRequested: 0,
		price: "4.30"
	});

	item13.save(function(err){

	});

	var item14 = new Item({
		name: "Chicken",
		category: "Food",
		amountRequested: 0,
		price: "7.25"
	});

	item14.save(function(err){

	});

	var item15 = new Item({
		name: "Butter",
		category: "Food",
		amountRequested: 0,
		price: "4.40"
	});

	item15.save(function(err){

	});

	var item16 = new Item({
		name: "Pork",
		category: "Food",
		amountRequested: 0,
		price: "8.25"
	});

	item16.save(function(err){

	});

	var item17 = new Item({
		name: "Oranges",
		category: "Food",
		amountRequested: 0,
		price: "5.00"
	});

	item17.save(function(err){

	});

	var item18 = new Item({
		name: "Bananas",
		category: "Food",
		amountRequested: 0,
		price: "4.25"
	});

	item18.save(function(err){

	});

	var item19 = new Item({
		name: "Bandages",
		category: "Food",
		amountRequested: 0,
		price: "7.50"
	});

	item19.save(function(err){

	});

	var item20 = new Item({
		name: "T-shirt",
		category: "Clothing",
		amountRequested: 0,
		price: "15.50"
	});

	item20.save(function(err){

	});

	var item21 = new Item({
		name: "Socks",
		category: "Clothing",
		amountRequested: 0,
		price: "7.00"
	});

	item21.save(function(err){

	});

	var item22 = new Item({
		name: "Pants",
		category: "Clothing",
		amountRequested: 0,
		price: "17.00"
	});

	item22.save(function(err){

	});

	var item23 = new Item({
		name: "Sweater",
		category: "Clothing",
		amountRequested: 0,
		price: "20.00"
	});

	item23.save(function(err){

	});

	var item24 = new Item({
		name: "Pencils",
		category: "Education",
		amountRequested: 0,
		price: "1.00"
	});

	item24.save(function(err){

	});

	var item25 = new Item({
		name: "Notebook",
		category: "Education",
		amountRequested: 0,
		price: "1.50"
	});

	item25.save(function(err){

	});
	var item26 = new Item({
		name: "Backpack",
		category: "Education",
		amountRequested: 0,
		price: "21.00"
	});

	item26.save(function(err){

	});
	
	});
	
}).listen(1337);

