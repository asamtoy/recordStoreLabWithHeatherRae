var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;
}

Store.prototype.addRecord = function(record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function() {
  return this.inventory.map(function(record) {
    return record.details();
  });

  // Store.prototype.remove = function(inventory, itemToRemove) {
  //   inventory.splice(function(sellRecord(record)) {
  //
  //   })
  // }

  Store.prototype.sellRecord = function(record){
    var itemToSell = this.inventory.indexOf(record);

    inventory.splice()
  }

};

module.exports = Store;
