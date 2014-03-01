var makeLinkedList = function(){
  var list = {};
  list._counter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = makeNode(value);

    if (this.head === null) {
      this.head = newNode;
    }
    else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }

    this._counter++;
    this[this._counter] = newNode;
    newNode._counter = this._counter;
    this.tail = this[this._counter];
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);

    if (this.head === null) {
      this.head = newNode;
    }
    else {
      newNode.next = this.head;
      this.tail.previous = newNode;
    }

    this._counter++;
    this[this._counter] = newNode;
    newNode._counter = this._counter;
    this.head = this[this._counter];
  };

  list.removeHead = function() {
    var transientValue = this.head;

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    this.head.next.previous = this.head;
    this.head = this.head.next;

    delete this[transientValue['_counter']];
  };

  list.removeTail = function() {
    var transientValue = this.tail;

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    this.tail.previous.next = this.head;
    this.tail = this.tail.previous;

    delete this[transientValue['_counter']];
  };

  list.contains = function(target, node) {
    //Use a map for each node, return an array of true or false
    return _(this).chain().map(function(item) {
      return item.value === target;
    }, this).any(function(item){
      return item;
    }, this).value();
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
