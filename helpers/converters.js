const LinkedList = require('./linked-list');
const DoublyLinkedList = require('./doubly-linked-list');

function convertArrayToLinkedList(values) {
    const list = new LinkedList();
    for (const val of values) {
        list.appendAtTail(val);
    }
    return list;
}

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
