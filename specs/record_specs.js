var assert = require('assert');
var Record = require('../record');

describe('Record', function(){
  var record1;

  beforeEach(function(){
    record1 = new Record("Tom Petty", "Free Fallin", "Rock", 10);

  });

  it("should have an artist", function(){
    assert.strictEqual(record1.artist, "Tom Petty");

  });

  it("should have a title", function(){
    assert.strictEqual("Free Fallin", record1.title);

  });

  it("should have a genre", function(){
    assert.strictEqual(record1.genre, "Rock");

  });

  it("should have a price", function(){
    assert.strictEqual(record1.price, 10);
  });

  it("should print out record's properties as a string", function(){
    assert.strictEqual(record1.details(record1), "Tom Petty, Free Fallin, Rock, 10");
  });



});

// specs: artist, title, genre, price
