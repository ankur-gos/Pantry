'use strict';

var should = require('chai').should();
var textParser = require('../textParser');

describe('textParser test', function(){
    describe('validInput', function(){
        it("Should parse out the materials", function(){
            var items = "Eggs, Milk, Pasta: 3907 Rincon Ridge Dr., Santa Rosa, California";
            textParser.textParser(items, function(resultItems, resultAddress){
                var expectedItems = ['Eggs', 'Milk', 'Pasta'];
                var expectedAddress = '3907 Rincon Ridge Dr., Santa Rosa, California';
                resultItems.should.deep.equal(expectedItems);
                resultAddress.should.equal(expectedAddress);
            });
        });
    });

    describe('invalid input', function(){

    });
})