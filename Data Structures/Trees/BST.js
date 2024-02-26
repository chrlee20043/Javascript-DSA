class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Creating the tree

  // var tree = new BinarySearchTree();
  // tree.root = new Node(10);
  // tree.root.right = new Node(15);
  // tree.root.left = new Node(7);
  // tree.root.left.right = new Node(9);

  // Insert
  insert(value) {
    // Create a new node
    let newNode = new Node(value);
    // Start at root, check if there is a root. If not, the root becomes the new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // If there is a root, check if the value of the new node is greater than or less than the value of the root
        // If it is less, check to see if there is a node to the left
        if (value === current.value) return undefined;
        if (value < current.value) {
          // If there is, move to that node and repeat the steps
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            // If there is not, add that node as the left property
            current = current.left;
          }
          // If it is greater, check to see if there is a node to the right
        } else if (value > current.value) {
          // If there is, move to that node and repeat the steps
          if (current.right === null) {
            current.right = newNode;
            return this;
            // If there is not, add that node as the right property
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // find
  find(value) {
    // starting at root, check if there is a root, if not, we are done
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    // if there is a root, check if the value of the new node is the value we are looking for
    // if we found it, we're done
    // if not, check to see if the value is greater than or less than the value of the root

    while (current && !found) {
      // if it is less, check to see if there is a node to the left
      // if there is, move to that node and repeat the steps
      // if there is not, we're done searching
      if (value < current.value) {
        current = current.left;
        // if it is greater, check to see if there is a node to the right
        // if there is, move to that node and repeat the steps
        // if there is not, we're done searching
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // Breadth First Search
  BST() {
    // create a queue (can be an array)
    // create a variable to store the value of nodes visited
    let node = this.root,
      data = [],
      queue = [];
    // place the root node in the queue
    queue.push(this.root);
    // Loop as long as there is anything in the queue
    while (queue.length) {
      // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
      node = queue.shift();
      data.push(node);
      // If there if a left property on the node dequeued - add it to the queue
      if (node.left) queue.push(node.left);
      // If there is a right property on the node dequeued - add it to the queue
      if (node.right) queue.push(node.right);
    }
    // Return the variable that stores the values
    console.log("data", data);
    return data;
  }
  DFSPreOrder() {
    let data = [];
    // let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    console.log(data);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    // let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);

    console.log(data);
    return data;
  }
  DFSInOrder() {
    let data = [];
    // let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    console.log(data);
    return data;
  }
}

// var tree = new BinarySearchTree();
// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(13));
// console.log(tree.insert(11));
// console.log(tree.insert(2));
// console.log(tree.insert(16));
// console.log(tree.insert(7));
// console.log(tree.find(13));
// console.log(tree.find(14));

// BST code

var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
