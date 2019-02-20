// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //base case if there is no left or right at the correct spot then create the new node and assign to this.left or this.right

    // check if data is less than this.data - explore left branch
    if (data < this.data) {
      // if there is a left branch we need to recursively call insert on the left node
      if(this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    // check if data is greater than this.data - explore right branch
    } else {
      if(this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  contains(data) {
    // base case
    if (data === this.data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    // if there is no this.right or this.left and data wasn't found return null
    return null;
  }
}

module.exports = Node;
