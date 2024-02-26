// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create new node
    let newNode = new Node(val);
    // if there is no head AKA the list is empty, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Set the next property on the tail to be the new node
      this.tail.next = newNode;
      // Set the tail property on the list to be the newly created node
      this.tail = newNode;
    }
    // Increment the length
    this.length++;
    // return the linked list
    return this;
  }
  pop() {
    // If no nodes in the list, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      // move current forward one until reach the end of list
      current = current.next;
    }
    // set the tail to be the second to last node
    this.tail = newTail;
    // set the next property of the second to last node to be null
    this.tail.next = null;
    // decrement length by 1
    this.length--;
    // if list is empty, set head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the node removed
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    // Store currennt head property in a variable
    let currentHead = this.head;
    // Set head property to the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;
    // Return the value of the node removed
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    // create a new node
    let newNode = new Node(val);
    // if no head property, set head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise, set newly created node's next property to be the current head
      newNode.next = this.head;
      // set the head property on the list to be that newly created node
      this.head = newNode;
    }
    // increment the length of the list by 1
    this.length++;
    // return the linked list
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    // declare variable for the get function to get the value of a specific index
    let foundNode = this.get(index);
    // if the node is found, set the node's value to be the val passed into the function
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // otherwise, return false
    return false;
  }
  insert(index, val) {
    // if index is not in the list, return false
    if (index < 0 || index > this.length) return false;
    // if index is equal to length of list, insert new val to end of the list
    if (index === this.length) return this.push(val);
    // if index is equal to 0, add new node to the front of the list
    if (index === 0) return this.unshift(val);
    // create the new node
    let newNode = new Node(val);
    // declare previous node
    let prev = this.get(index - 1);
    // declare temp variable to hold the original previous' next node
    let temp = prev.next;
    // set the new next property to be the new Node
    prev.next = newNode;
    // set the new node's next property to be the temp variable
    newNode.next = temp;
    // increment the length
    this.length++;
    // return true
    return true;
  }
  remove(index) {
    // if index is less than zero or greater than the length return undefined
    if (index < 0 || index > this.length) return undefined;
    // if index is 0, use the shift method
    if (index === 0) return this.shift();
    // if index is equal to the length -1, use the pop method
    if (index === this.length - 1) return this.pop();

    // otherwise, use the get method to access the node at index - 1
    let prev = this.get(index - 1);
    // variable to store the original prev node's next property
    let removed = prev.next;
    // set the next property on that node to be the next of the next node
    prev.next = removed.next;
    // decrement the length
    this.length--;
    // return the value of the node removed
    return removed;
  }
  reverse() {
    // declare variable and initialize it to the head property
    let node = this.head;
    // swap head and tail
    this.head = this.tail;
    // swap head and tail
    this.tail = node;
    // declare variable previous to make sure that the tail.next is null (when reversed)
    let prev = null;
    let next;
    // loop through the list
    for (let i = 0; i < this.length; i++) {
      // set next to be the next property on whatever node is
      next = node.next;
      // set next property on the node to be the prev node
      node.next = prev;
      // set prev to be the value of the node variable
      prev = node;
      // set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList();
// `console.log(list.push("HELLO"));
// console.log(list.push("GOODBYE"));`

// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.unshift(100));

// console.log(list.get(0));

// console.log(list.remove(1));

// console.log(list);
console.log(list.push(123));
console.log(list.push(234));
console.log(list.push(345));
console.log(list.push(456));
console.log(list.print());
console.log(list.reverse());
console.log(list.print());
