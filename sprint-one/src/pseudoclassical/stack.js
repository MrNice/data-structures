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

var Stack = function() {
  this.storage = {};
  this.storage.length = 0;
};

for(var key in stackMethods) {
  Stack.prototype[key] = stackMethods[key];
}
