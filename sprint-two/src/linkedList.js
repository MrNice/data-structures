var makeLinkedList = function(){
  var list = {};
  list._counter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
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
    //Then set tail to the new node.
    this.tail = this[this._counter];
  };

  list.removeHead = function(){
    //Save what head is pointing to in a transient value
    //Set head.next.previous to head.
    //Point Head to head.next
    //Delete what that transient value is pointing to.
  };

  list.contains = function(target, node){
    //Use a map for each node, return an array of true or false
    
    //What's the difference between target and node? Why two parameters?
    
    //return the "any"
  };

  return list;
};

var makeNode = function(value){
  //Don't change this code
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  
  return node;
};
