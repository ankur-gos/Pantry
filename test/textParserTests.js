'use strict';

var should = require('chai').should();
var textParser = require('../textParser');

describe('textParser test', function(){
    describe('validInput', function(){
        var items = "Eggs, Milk, Pasta";
        textParser.textParser(items, function(result){
            var expected = ['Eggs', 'Milk', 'Pasta'];
            result.should.equal(expected);
        })
    });

    describe('invalid input', function(){
        
    }))
})