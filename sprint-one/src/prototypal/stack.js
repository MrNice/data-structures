var stackMethods = {
  push : function(value){
    var storage = this.storage;
    storage[storage['length']] = value;
    storage['length'] += 1;
  },
  pop : function() {
    var storage = this.storage;
    if(storage['length'] > 0) {
      var transientvalue = storage[storage['length'] - 1];
      storage['length'] -= 1;
      return transientvalue;
    }
  },
  size : function() {
    return this.storage['length'];
  }
}

var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = { 'length' : 0};
  return instance;
};
