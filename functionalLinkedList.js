// Functional Instantiation of LinkedList class.

var LinkedList = function() {
  var list = {}
  // Properties
  list.head = list.head || null;
  list.tail = list.tail || null;

  // Node
  var Node = function(value) {
    var node = {};
    node.value = value;
    node.next = node.next || null;
    return node;
  };

  // Methods
  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.tail) {
      list.tail = node;
    }
    if (!list.head) {
      list.head = node;
    }
    list.tail.next = node
    list.tail = node;
  };
  list.removeHead = function() {
    var save = this.head.value;
    this.head = this.head.next;
    return save;
  };

  list.contains = function(target) {
    var current = this.head;
    while(current) {
      if ( current.value === target) {
        return true;
      } else {
        current = current.next
      }
    }
    return false
  };
  return list;
}




var linkedList = LinkedList();


// TODO use Speck.js to turns these into tests.

// Tail Tests
linkedList.addToTail(3);
console.log(linkedList.tail)
linkedList.addToTail(4);
console.log(linkedList.tail)
linkedList.addToTail(5);
console.log(linkedList.tail)

// Head Tests
// console.log(linkedList.head.value, "PRE")
// console.log(linkedList.removeHead(), "DURING")
// console.log(linkedList.head.value, "AFTER")
// console.log(linkedList.removeHead(), "DURING")
// console.log(linkedList.head.value, "DOUBLE AFTER")

// Contains Test
console.log(linkedList.contains(6))



