var makeLinkedList = function(){
  var list = {};
  list._head = null;
  list._tail = null;

  list.addToTail = function(value){
    //Add a new node to the list
    
    //Check to see if head is null
    
      //If yes, add a node to list and point head to newnode, newnode.previous to head.
      
      //Point tail to newnode
      
    //Point newnode.previous to what tail is pointing at
    
    //Then set next on the current tail
    
    //Then set tail to the new node.
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
  node._value = value;
  node._next = null;
  node._previous = null;
  
  return node;
};
