// The Mission: Linked Lists

class Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    countNodes() {
      let current = this.head;
      let count = 1;
      while(current.next) {
        current = current.next;
        count += 1;
      }
      console.log("node count", count);
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size += 1;
    }
  
    insertLast(data) {
      let node = new Node(data);
      let current;
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while(current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.size += 1;
    }
  
    reverseLinkedList(head) {
      let prev = null;
      while(head !== null) {
        // let nextNode = head.next;
        // prev = head;
        // head = nextNode;
        [prev, head] = [head, head.next];
      }
      return prev;
    }
  
    insertAt(data, index) {
      if (index > 0 && index > this.size) return;
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const node = new Node(data);
      let prev;
      let current;
  
      current = this.head;
      let count = 0;
  
      while(count < index) {
        prev = current;
        current = current.next;
        count += 1;
      }
  
      node.next = current;
      prev.next = node;
      this.size = 1;
    }
  
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while(current) {
        if (count === index) {
          console.log(current.data);
        }
        count+= 1;
        current = current.next;
      }
    }
  }
  
  
  const linkedList = new LinkedList();
  
  linkedList.insertFirst(1);
  linkedList.insertFirst(2);
  linkedList.insertFirst(3);
  linkedList.insertFirst(4);
  console.log(linkedList.head);
  const reverse = linkedList.reverseLinkedList(linkedList.head);
  console.log(reverse);