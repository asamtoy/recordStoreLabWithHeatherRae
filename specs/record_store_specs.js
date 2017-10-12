var assert = require('assert');
var Store = require('../store');
var Record = require('../record');

describe('Store', function(){

  var store1;
  var record1;
  var record2;

  beforeEach(function(){
    store1 = new Store("Rae's Records", "Aberdeen");
    record1 = new Record("Tom Petty", "Free Fallin", "Rock", 10);
    record2 = new Record("Snap", "World Power", "Rap", 7);
    store1.addRecord(record1);
    store1.addRecord(record2);
  })

  it("should have a name", function(){
    assert.strictEqual(store1.name, "Rae's Records");
  });

  it("should have a city", function(){
    assert.strictEqual(store1.city, "Aberdeen");
  });

  // it("should have no inventory", function(){
  //   assert.strictEqual(store1.inventory.length, 0);
  // });

  it("should have a balance of 100 at beginning", function(){
    assert.strictEqual(store1.balance, 100);
  });

  it("should be able to add a record", function(){
    assert.strictEqual(store1.inventory.length, 2);
  });

  it("should be able to list inventory", function() {
    assert.deepEqual(store1.listInventory(), ["Tom Petty, Free Fallin, Rock, 10", "Snap, World Power, Rap, 7"]);
  })

  it("Should be able to sell a record and update inventory", function(){
    store1.sellRecord(record1);
    assert.strictEqual(store1.inventory.length, 1);
  });

  it("Should be able to sell a record and update the balance", function(){
    store1.sellRecord(record1);
    assert.strictEqual(store1.balance, 110);
  });

});


// Specs for store: name, city, inventory
