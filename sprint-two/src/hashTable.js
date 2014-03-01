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
  // NOTE: use splice to modify the nested array.

  //else return undefined
};

HashTable.prototype.manipulateStorage = function(index, key, doesExist, notExist){
  //Check if this.storage[i] is empty
  if(this._storage[index] !== undefined){
  //If it's full, search for the arr[0] === key

    //If found, doesExist(key, value), which returns a value

  }
  //If nothing has returned by now, run notexist

  //return the value
}