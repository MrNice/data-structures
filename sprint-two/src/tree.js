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
    var flag = false;
    //If this node's value = target, return true
    if(this.value === target) {
      return true;
    }
    //Otherwise, test each of the children
    _.each(this.children, function(child) {
      flag = flag || child.contains(target);
    });

    return flag;
  },
};



