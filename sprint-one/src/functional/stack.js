var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage['length'] = 0;

  // Implement the methods below
  instance.push = function(value){
    storage[storage['length']] = value;
    storage['length'] += 1;
  };

  instance.pop = function(){
    if(storage['length'] > 0) {
      var transientvalue = storage[storage['length'] - 1];
      storage['length'] -= 1;
      return transientvalue;
    }
  };

  instance.size = function(){
    return storage['length'];
  };

  return instance;
};
