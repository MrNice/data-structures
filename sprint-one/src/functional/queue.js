var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage['length'] = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[storage['length']] = value;
    storage['length'] += 1;
  };

  instance.dequeue = function(){
    if(storage['length'] > 0) {
      var transientvalue = storage[0];

      for(var i = 0, l = storage['length']; i < l; i++){
        storage[i] = storage[i+1];
      }

      storage['length'] -=  1;
      return transientvalue;
    }
  };

  instance.size = function(){
    return storage['length'];
  };

  return instance;
};
