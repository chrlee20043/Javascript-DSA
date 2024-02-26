// Doubly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a new node with the value passed to the function
    let newNode = new Node(val);
    // if the head property is null set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // if not, set the next property on the tail to be that node
    else {
      this.tail.next = newNode;
      // set the previous property of the new node to be the original tail
      newNode.prev = this.tail;
      // Set the tail to be the newly created node
      this.tail = newNode;
    }

    // Increment the length
    this.length++;
    // Return the DLL
    return this;
  }

  pop() {
    // if there is no head, return undefined
    if (!this.head) return undefined;
    // store the current tail in a variable to return later
    let current = this.tail;
    // if the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the tail to be the previous node
      this.tail = current.prev;
      // set the new tail's next to be null
      this.tail.next = null;
      // take old tail's previous property and set it to null
      current.prev = null;
    }
    // decrement the length
    this.length--;
    // return the value removed
    return current;
  }

  shift() {
    // if length is 0 return undefined
    if (this.length === 0) return undefined;
    // store the current head property in a variable
    let oldHead = this.head;

    // if length is one, set head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // update the head to be the next of the old head
    this.head = oldHead.next;
    // set the head's prev property to null
    this.head.prev = null;
    // set the old head's next to be null
    oldHead.next = null;
    // decrement the length
    this.length--;
    // return old head
    return oldHead;
  }

  unshift(val) {
    // Create new node with the value passed to the function
    let newNode = new Node(val);
    // if the length is 0, set head and tail to be new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the prev property on the head of the list to be the new node
      this.head.prev = newNode;
      // set the next property on the new node to be the head property
      newNode.next = this.head;
      // update the head to be the new node
      this.head = newNode;
    }
    // increment the length
    this.length++;
    // return the list
    return this;
  }

  get(index) {
    // if index is less than 0 or equal to length, return null
    if (index < 0 || index >= this.length) return null;
    // initialize counter
    if (index <= this.length / 2) {
      let counter = 0;
      // initialize current index
      let current = this.head;
      // if the index is less than or equal to half the length of list
      while (counter != index) {
        //loop through the list starting from the head and loop towards the middle
        current = current.next;
        counter++;
      }
      // return the node once it is found
      return current;
    } else {
      // if the index is greater than half the length of the list
      if (index > this.length / 2) {
        let counter = this.length - 1;
        let current = this.tail;
        // loop through the list starting from the tail and loop towards the middle
        while (counter !== index) {
          current = current.prev;
          counter--;
        }
        // return the node once it is found
        return current;
      }
    }
  }

  set(index, val) {
    // create a variable which is the result of the get method at the index passed to the function
    let foundNode = this.get(index);
    // if the get method returns a valid node
    if (foundNode != null) {
      // set the value of that node to be the value passed to the function
      foundNode.val = val;
      // return true
      return true;
      // otherwise, return false
    }
    return false;
  }

  insert(index, val) {
    // if the index is less than 0 or greater than or equal to length return false
    if (index < 0 || index >= this.length) return false;
    // if the index is 0, unshift
    if (index === 0) return this.unshift(val);

    // if the index is the same as the length, push
    if (index === this.length) return this.push(val);
    // use the get method to access the index -1
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    // set the next and prev properties on the correct nodes to link everything together
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    // increment the length
    this.length++;
    // return true
    return true;
  }

  remove(index) {
    // if the index is less than 0 or greater than or equal to the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if the index is 0, shift
    if (index === 0) return this.shift();
    // if the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // use the get method to retrieve the item to be removed
    let removedNode = this.get(index);
    // update the next and prev properties to remove the found node from the list
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // set next and prev to null on the found node
    removedNode.next = null;
    removedNode.prev = null;
    // Decrement the length
    this.length--;
    // Return the removed node
    return removedNode;
  }
}

let list = new DoublyLinkedList();

console.log(list.push(20));
console.log(list.push(30));
console.log(list.push(40));
console.log(list.push(50));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(10));
console.log(list.get(3));
// console.log(list.set(2, 26));
console.log(list.insert(1, "hello"));
console.log(list.remove(1));
// console.log(list);
