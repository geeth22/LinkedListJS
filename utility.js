class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /** Insert first node */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++; 
    }
}
module.exports = new Linkedlist();
