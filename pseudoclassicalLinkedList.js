// Pseudoclassical instantiation style of LinkedList class.

var LinkedList = function() {
  this.head = this.head || null;
  this.tail = this.tail || null;
}

var Node = function(value) {
  this.value = value;
  this.next = this.next || null;
}

LinkedList.prototype.addToTail = function(value) {

  var node = new Node(value);
  if (!this.tail) {
    this.tail = node;
  }
  if (!this.head) {
    this.head = node;
  }
  this.tail.next = node
  this.tail = node;

};

LinkedList.prototype.removeHead = function() {
  var save = this.head.value;
  this.head = this.head.next;
  return save;
};

LinkedList.prototype.contains = function(target) {
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







var linkedList = new LinkedList();


// TODO use Speck.js to turns these into tests.

// Tail Tests
linkedList.addToTail(3);
// console.log(linkedList.tail)
linkedList.addToTail(4);
// console.log(linkedList.tail)
linkedList.addToTail(5);
// console.log(linkedList.tail)
linkedList.addToTail(6);
// console.log(linkedList.tail)
linkedList.addToTail(7);
// console.log(linkedList.tail)
linkedList.addToTail(8);
// console.log(linkedList.tail)
// Head Tests
console.log(linkedList.head, "PRE")
// console.log(linkedList.removeHead(), "DURING")
// console.log(linkedList.head.value, "AFTER")
// console.log(linkedList.removeHead(), "DURING")
// console.log(linkedList.head.value, "DOUBLE AFTER")

// Contains Test
console.log(linkedList.contains(6))



