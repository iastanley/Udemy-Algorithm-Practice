// writing an alternative implementation of linked list
// where there is no second Node class
// instead nodes will be represented as plain javascript objects

// CONCLUSION: using ONLY a LinkedList Class totally works with very few implementation changes
class Node {
  constructor(data, node=null){
    this.data = data;
    this.next = node;
  }
}


class LinkedList {
  constructor(data = null) {
    this.head = data != null ? new Node(data) : null
  }

  // insert a node at the end of linked list
  // analogous to Array.push
  push(data) {
    if (!this.head) {
      this.head = new Node(data);
      
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      // when there is no more node .next
      node.next = new Node(data);
    }
  }

  // insert a node at the start of a linked list
  // analogous to Array.unshift

  // remove a node from the end of linked list and return it
  // analogous to Array.pop

  // remove a node from the beginning of a linked list and return it
  // analogous to Array.shift

  // return the length of a linked list
  getLength() {
    if(!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // get value at specific index - does NOT mutate the linked list
  // return null if index is out of bounds
  getAt(index) {
    if(!this.head) {
      return null;
    }
    let currentPosition = 0;
    let node = this.head;
    while (node.next && currentPosition !== index) {
      node = node.next;
      currentPosition++;
    }
    if (currentPosition === index) {
      return node.data;
    }
    return null;
  }

  // implement forEach for linked list
}

module.exports = {
  Node,
  LinkedList
}