let stack = [];
// Array Implementation with push/pop

// console.log(stack.push("google"));
// console.log(stack.push("instagram"));
// console.log(stack.push("youtube"));
// console.log(stack.pop());

// Array implementation with shift/unshift

console.log(stack.unshift("create new file"));
console.log(stack.unshift("resized file"));
console.log(stack.unshift("cloned out wrinkle"));
console.log(stack.shift());

// Singly Linked list Implementation

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // the function should accept a value
  push(val) {
    // create a new node with that value
    let newNode = new Node(val);
    // if there are no nodes in the stack, set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if there is at least one node, create a variable that stores the current first property on the stack
      let temp = this.first;
      // reset the first property to be the newly created node
      this.first = newNode;
      // set the next property on the node to be the previously created variable
      this.first.next = temp;
      // increment the size of the stack by 1
      return ++this.size;
    }
  }

  pop() {
    // if no nodes in stack, return null
    if (!this.first) return null;
    // create temp variable to store the first property on the stack
    let temp = this.first;
    // if only one node, set first and last property to be null
    if (this.first === this.last) {
      this.last = null;
    } else {
      // if there is more than one node, set the first property to be the next property on the current first
      this.first = this.first.next;
      // decrement the size by 1
      this.size--;
      // return the value of the node removed
      return temp.value;
    }
  }
}
