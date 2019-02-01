// writing an alternative implementation of linked list
// where there is no second Node class
// instead nodes will be represented as plain javascript objects

// CONCLUSION: using ONLY a LinkedList Class totally works with very few implementation changes

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = {
      data,
      next: this.head
    }
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
    const newNode = { data };
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

    return node || null;
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
      this.head = { data, next: null }
      return;
    }

    if(index === 0) {
      this.head = { data, next: this.head};
      return;
    }

    // this.getLast() handles case where index is out of bounds
    const previous = this.getAt(index - 1) || this.getLast();
    const newNode = { data, next: previous.next }
    previous.next = newNode;
  }
}

module.exports = { LinkedList };