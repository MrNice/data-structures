var queueMethods = {
  dequeue : function(){
    var storage = this.storage;

    if(storage['length'] > 0) {
      var transientvalue = storage[0];

      for(var i = 0, l = storage['length']; i < l; i++){
        storage[i] = storage[i+1];
      }

      storage['length'] -=  1;
      return transientvalue;
    }
  },
  enqueue : function(value){
    var storage = this.storage;
    storage[storage['length']] = value;
    storage['length'] += 1;
  },
  size : function(){
    return this.storage['length'];
  },
}

var Queue = function(){
  this.storage = {};
  this.storage.length = 0;
}

for(var key in queueMethods) {
  Queue.prototype[key] = queueMethods[key];
}
