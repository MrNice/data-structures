// Implement a bloom filter using the three helper functions available from
// hashTableHelpers.js

// Bloomfilter sits on top of a data structure and returns either false
// OR a probability that the key is in the data structure.

var bloomMethods = {
  add: function(key, value){
    return true;
  },
  check: function(key){
    var num = 75;
    console.log(num + '% probability, Captain');
  },
  remove: function(key, threshold){
    if(!this.check(value)) {
      //Report not in storage
      return false;
    } else {
      //Try to find it in storage
      if(this.check(value) > threshold) {
        console.log("too unlikely to find it, captain");
        return false;
      } else {
        return this.storage[value];
      }
    }
  },
};

var Bloom = function(storage, hashes, tablesize) {
  this.storage = storage || {};
  this.table = limitedArray(tablesize || 18);
  this.hashes = hashes || {
    hr : getIndexBelowMaxForKey,
    djb2 : djb2,
    universalHash : universalHash,
  };
};

for(var key in bloomMethods) {
  Bloom.prototype[key] = bloomMethods[key];
}