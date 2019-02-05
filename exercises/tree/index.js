// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = []; // I think it is kind of weird to store children in an array
  }

  add(data) {
    this.children.push(new Node(data));
  }

  // filtering an array to remove a child seems inefficient - and inherent to the limitations of storing children in an array
  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // breadth first traversal through tree
  traverseBF(fn) {
    let node = this.root;
    const nodeArray = [];
    while(node) {
      fn(node);
      // add children to end of array for BF
      nodeArray.push(...node.children); // VERY COOL ES6 TRICK!!!
      // equivalent to:
      // node.children.forEach(child => nodeArray.push(child));
      node = nodeArray.shift();
    }
  }

  // depth first traversal
  traverseDF(fn) {
    let node = this.root;
    const nodeArray = [];
    while(node) {
      fn(node);
      if(node.children.length) {
        // add children to the begging of array for DF
        nodeArray.unshift(...node.children);
      }
      node = nodeArray.shift();
    }
  }
}

module.exports = { Tree, Node };
