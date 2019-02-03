// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // my own
  consoleLogList() {
    let node = this.head;
    let strArray = [];
    let index = 0;
    while(node) {
      strArray.push(`(${index}) ${node.data}`); 
      index++;
      node = node.next;
    }
    console.log(strArray.join(' ==> '));
  }

  // insert a new node to store data argument at head of linked list
  // any existing head node becomes the next node in list
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head; 

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head && this.head.next;
  }

  removeLast() {
    // handle special cases if linked list length is 0 or 1
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;
    
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
    return;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const lastNode = this.getLast();
      lastNode.next = newNode;
    }
  }

  // return node at index - does not modify linked list
  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (counter < index && node) {
      node = node.next;
      counter++;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index > 0) {
      let previousNode = this.getAt(index - 1);
      if (previousNode && previousNode.next) {
        previousNode.next = previousNode.next.next;
      }
    } else {
      this.head = this.head.next;
    }
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // this.getLast() handles case where index is out of bounds
    const previous = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, previous.next);
    previous.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let index = 0;
    while(node) {
      fn(node, index);
      index++;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
