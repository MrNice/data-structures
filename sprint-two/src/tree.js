var makeTree = function(value, parent, children){
  var newTree = {
    value : value,
    parent : (parent ? parent : null),
    children : [],
  };

  for(var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }

  _.each(children, function(child) {
    newTree.children.push(child);
  });

  return newTree;
};


var treeMethods = {
  addChild : function(value){
    this.children.push(makeTree(value, this));
  },
  contains : function(target){

  },
};



