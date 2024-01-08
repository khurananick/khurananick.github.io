import ListNode from "./ListNodeClass";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.init()
  }

  init() {
    for(let i=1; i<4; i++) {
      this.push(i)
    }
  }

  // Add a node to the end of the linked list
  push(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  // Remove a node from the end of the linked list
  pop() {
    if(this.head === null) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) this.head = this.tail = null;
    return current;
  }

  // Remove a node from the beginning of the linked list
  shift() {
    if (this.head === null) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;
    return current;
  }

  // Add a node to the beginning of the linked list
  unshift(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  // Get the node at the specified index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Change the value of a node at the specified index
  set(index, value) {
    let node = this.get(index);
    if (node === null) return false;
    node.value = value;
    return true;
  }

  // Insert a node at the specified index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    const newNode = new ListNode(value);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // Remove a node at the specified index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse the linked list
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  // Reset the linked list
  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.init()
  }
}

export default LinkedList;