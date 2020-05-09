/*
Queue that allows finding first element of a specific type
Queue implementation is based on Linked List implementation in Java

Time complexity:
enqueue O(1)
dequeueAny O(1)
dequeueDog O(n)
dequeueCat O(n)
 */

const ListNode = require('../../../helpers/list-node');
const LinkedList = require('../../../helpers/doubly-linked-list-pure');

function Animal(type, name) {
    this.type = type;
    this.name = name;
}

Animal.types = {
    dog: 'dog',
    cat: 'cat'
};

/**
 * Queue that is implemented via two stacks
 * @constructor
 */
function AnimalQueue() {
    this.list = new LinkedList();
}

/**
 * Push Animal to Queue
 * @param animal {Animal}       Type of animal to enqueue (cat or dog)
 */
AnimalQueue.prototype.enqueue = function(animal) {
    this.list.appendAtTail(new ListNode(animal));
};

/**
 * Pop next Animal from queue in FIFO order
 * @return {Animal} next value in the queue, or undefined
 */
AnimalQueue.prototype.dequeueAny = function() {
    if (this.list.getSize() === 0) {
        return null;
    }
    return this.list.popAtHead().val;
};

/**
 * Dequeue next Animal type Dog from queue in FIFO order
 * @return {Animal} next value in the queue, or undefined
 */
AnimalQueue.prototype.dequeueDog = function() {
    let node = this.list.peekAtHead();
    if (!node) {
        return null;
    }
    while (node && node.val.type !== Animal.types.dog) {
        node = node.next;
    }
    if (!node) {
        return null;
    }
    this.list.delete(node);
    return node.val;
};

/**
 * Dequeue next Animal type Cat from queue in FIFO order
 * @return {Animal} next value in the queue, or undefined
 */
AnimalQueue.prototype.dequeueCat = function() {
    let node = this.list.peekAtHead();
    if (!node) {
        return null;
    }
    while (node && node.val.type !== Animal.types.cat) {
        node = node.next;
    }
    if (!node) {
        return null;
    }
    this.list.delete(node);
    return node.val;
};

/**
 * Check if list queue is empty
 * @returns {boolean}
 */
AnimalQueue.prototype.isEmpty = function() {
    return this.list.getSize() === 0;
};

/**
 * Wrapper function for custom classes. Accepts operations and values, executes operations, returns array of results
 * @param operations {Array[]}  Array of operations
 * @return {array}              Array with results from operations
 */
module.exports = function wrapper(operations) {
    const queue = new AnimalQueue(), results = [];
    for (let action of operations) {
        const [op, value] = action;
        results.push(queue[op](value)); // only saving dequeue results, only name of the animal
    }

    return results;
};
