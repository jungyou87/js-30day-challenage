class Node {
    constructor(data , next, head = null){
        this.data = data;
        this.next = next;
        this.head = head;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

    }
    insert (data) {
        this.head = new Node (data, this.head)
    }
}