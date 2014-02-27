var makeLinkedList = function(){
  var list = {};
  list._counter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Add a new node to the list
    var newNode = makeNode(value);
    //Check to see if head is null
    // the first node
    if (this.head === null) {
      //If yes, add a node to list and point head to newnode, newnode.previous to head.
      this.head = newNode;
    }
    //Point newnode.previous to what tail is pointing at
     else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
     }
    //Then set next on the current tail
    this._counter++;
    this[this._counter] = newNode;
    newNode._counter = this._counter;
    //Then set tail to the new node.
    this.tail = this[this._counter];
  };

  list.removeHead = function() {
    //Save what head is pointing to in a transient value
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    
    var transientValue = this.head;
    //Set head.next.previous to head.
    this.head.next.previous = this.head;
    //Point Head to head.next
    this.head = this.head.next;
    //Delete what that transient value is pointing to.
    delete this[transientValue['_counter']];
  };

  list.contains = function(target, node) {
    //Use a map for each node, return an array of true or false
    return _(this).chain().map(function(item) {
      return item.value === target;
    }, this).any(function(item){
      return item;
    }, this).value();
    //What's the difference between target and node? Why two parameters?
    //return the "any"
  };

  return list;
};

var makeNode = function(value) {
  //Don't change this code
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  node._counter = null;
  
  return node;
};
