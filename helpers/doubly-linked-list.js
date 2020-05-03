const ListNode = function(val) {
    this.val = val;
    this.next = this.prev = null;
};

const DoublyLinkedList = function() {
    this.head = this.tail = null;
};

DoublyLinkedList.prototype.appendAtHead = function(value) {
    const node = new ListNode(value);
    if (this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    } else { // there is no tail. This is possible only if linked list is empty
        this.head = this.tail = node;
    }
};

DoublyLinkedList.prototype.appendAtTail = function(value) {
    const node = new ListNode(value);
    if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    } else { // there is no tail. This is possible only if linked list is empty
        this.tail = this.head = node;
    }
};

DoublyLinkedList.prototype.delete = function(node) {
    if (node.prev) {
        node.prev.next = node.next;
    }
    if (node.next) {
        node.next.prev = node.prev;
    }
    if (this.head === node) {
        this.head = node.next;
    }
    if (this.tail === node) {
        this.tail = node.prev;
    }
};

DoublyLinkedList.prototype.getAtHead = function() {
    return this.head;
};

DoublyLinkedList.prototype.getAtTail = function() {
    return this.tail;
};

module.exports = DoublyLinkedList;