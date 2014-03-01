var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};
/*********************************************
table.set(getIndexBelowMaxForKey("Sup", 8), ["Sup", "Dawg"]);
undefined
table.get(getIndexBelowMaxForKey("Sup", 8));
*********************************************/



HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //If storage[i] is empty, set it to [[k, v]]

  //Otherwise, search storage[i] for arr[0] === key

  //if found, set arr[1] to value

  //otherwise, storage[i].push([k, v])
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //If storage[i] is empty, return undefined

  //Else, search storage[i] for arr[0] === key

  //if found, return value

  //else, return undefined
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //If storage[i] is empty, return undefined

  //Else, search storage[i] for arr[0] === key

  //If found, splice it out of the array.
  // NOTE: use splice to modify the array.
};
