const ListNode = function(val) {
    this.val = val;
    this.next = this.prev = null;
};

const DoublyLinkedList = function() {
    this.head = this.tail = null;
    this.size = 0;
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
    this.size++;
};

/**
 * Append value at the end of doubly linked list (node is created automatically)
 * @param value {*}
 * @returns {void}
 */
DoublyLinkedList.prototype.appendAtTail = function(value) {
    const node = new ListNode(value);
    if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    } else { // there is no tail. This is possible only if linked list is empty
        this.tail = this.head = node;
    }
    this.size++;
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
    this.size--;
};

DoublyLinkedList.prototype.getAtHead = function() {
    return this.head;
};

DoublyLinkedList.prototype.getAtTail = function() {
    return this.tail;
};

DoublyLinkedList.prototype.getSize = function() {
    return this.size;
};

/**
 * Makes a clone of the list. Optionally skips one node
 * @param [nodeToSkip] {ListNode}
 * @returns {DoublyLinkedList}
 */
DoublyLinkedList.prototype.clone = function(nodeToSkip) {
    const list = new DoublyLinkedList();
    let node = this.head;
    while (node) {
        if (node !== nodeToSkip) {
            list.appendAtTail(node.val);
        }
        node = node.next;
    }
    return list;
};

module.exports = DoublyLinkedList;