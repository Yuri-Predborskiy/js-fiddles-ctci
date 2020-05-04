const LinkedList = require('./linked-list');
const DoublyLinkedList = require('./doubly-linked-list');

/**
 * Convert array into a linked list
 * @param values {array}
 * @returns {LinkedList}
 */
function convertArrayToLinkedList(values) {
    const list = new LinkedList();
    for (const val of values) {
        list.appendAtTail(val);
    }
    return list;
}

/**
 * Convert linked list into an array
 * @param list {LinkedList}
 * @returns {[]}
 */
function convertLinkedListToArray(list) {
    const array = [];
    let node = list.head;
    while (node) {
        array.push(node.val);
        node = node.next;
    }
    return array;
}

module.exports = {
    convertArrayToLinkedList,
    convertLinkedListToArray,
};
