var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;

  if(!storage[i]) {
    storage[i] = [[k, v]];
  }
    if(storage[i][j][0] == k) {
      storage[i][j][1] = v;
      return v;
    }
  }

  storage[i].push([k, v]);

  return v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;

  if(!storage[i]) {
    return undefined;
  }

  for(var j = 0, length = storage[i].length; j < length; j++) {
    if(storage[i][j][0] == k) {
        return storage[i][j][1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;

  if(!storage[i]) {
    return undefined;
  }

  for(var j = 0, length = storage[i].length; j < length; j++) {
    if(storage[i][j][0] == k) {
      // NOTE: use splice to modify the array.
      storage[i].splice(j,1, [k, null]);
    }
  }

  return undefined;
};
