/**
 * Pure linked list. Append operations require List Nodes,
 * @constructor
 */
const DoublyLinkedList = function() {
    this.head = this.tail = null;
    this.size = 0;
};

/**
 * Append a node to the start of the list
 * @param node {ListNode}
 */
DoublyLinkedList.prototype.appendAtHead = function(node) {
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
 * Append a node at the end of the linked list
 * @param node
 */
DoublyLinkedList.prototype.appendAtTail = function(node) {
    if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    } else { // there is no tail. This is possible only if linked list is empty
        this.tail = this.head = node;
    }
    this.size++;
};

/**
 * Delete node from linked list
 * @param node
 */
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

/**
 * Get node at the start of the list without removing the element
 * @returns {null|ListNode}
 */
DoublyLinkedList.prototype.peekAtHead = function() {
    return this.head;
};

/**
 * Remove and return element at the start of the list
 * @returns {null|ListNode}
 */
DoublyLinkedList.prototype.popAtHead = function() {
    const node = this.head;
    this.delete(node);
    return node;
};

/**
 * Get node at the end of the list
 * @returns {null|ListNode}
 */
DoublyLinkedList.prototype.peekAtTail = function() {
    return this.tail;
};

/**
 * Remove and return element at the end of the list
 * @returns {null|ListNode}
 */
DoublyLinkedList.prototype.popAtTail = function() {
    const node = this.tail;
    this.delete(node);
    return node;
};

/**
 * Get size of the linked list
 * @returns {number}
 */
DoublyLinkedList.prototype.getSize = function() {
    return this.size;
};

module.exports = DoublyLinkedList;