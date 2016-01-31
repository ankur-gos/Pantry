'use strict';

var should = require('chai').should();
var textParser = require('../textParser');

describe('textParser test', function(){
    describe('validInput', function(){
        it("Should parse out the materials", function(){
            var items = "Eggs, Milk: 7546 Stevenson service road, Santa Rosa, California";
            textParser.parseText(items, function(resultItems, resultAddress){
                var expectedItems = ['Eggs', 'Milk'];
                var expectedAddress = '7546 Stevenson service road, Santa Rosa, California';
                resultItems.should.deep.equal(expectedItems);
                resultAddress.should.equal(expectedAddress);
            });
        });
    });

    describe('invalid input', function(){

    });
})