// Implementation with array

let q = [];

// add elements to from start to end
// q.push("FIRST");
// q.push("SECOND");
// q.push("THIRD");

// remove elements from beginning
// q.shift("FIRST");
// q.shift("SECOND");
// q.shift("THIRD");

// add elements to beginning
// q.unshift("FIRST");
// q.unshift("SECOND");
// q.unshift("THIRD");

// Implementation with linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add a value in; function accepts a value
  enqueue(val) {
    // create a new node using that value passed to the function

    let newNode = newNode(val);
    // if there are no nodes in the queue, set this node to be the first and last property of the queue
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // Increment size of queue by one
    return ++this.size;
  }
  // return and remove the last value added in
  dequeue() {
    // if there is no property, return null
    if (!this.first) return null;
    // store first property in a variable
    let temp = this.first;
    // see if the first is the same as the last (check if there is only one node). If so, set the first and last to be null
    if (this.first === this.last) {
      this.last = null;
    }
    // If there is more than 1 node, set the first property to be the next property of first
    this.first = this.first.next;
    // Decrement the size by 1
    this.size--;
    // Return the value of the node dequeued
    return temp.value;
  }
}

console.log(q.enqueue("hello"));
