var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item){
  return (this._storage[JSON.stringify(item)] ? true : false);
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};
