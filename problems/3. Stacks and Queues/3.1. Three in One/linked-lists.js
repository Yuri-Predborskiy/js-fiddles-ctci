/*
Three stacks using a single array
Keep all the values in the same array, and use 4 linked lists for indexing
3 doubly linked lists are used to keep indexes of stack items
1 doubly linked list is used to keep a list of free indexes

At the start create doubly linked list of array slots
When pushing elements, pop one element from "free indexes" linked list
If linked list is empty (before we pop any elements), next free index is the sum of stack sizes
When popping elements, get element at the tail of respective linked list, and push that index into free indexes list
This way we'll overwrite "unused" array items without actually modifying them when "popping" them from the array

Benefits of this approach:
Space efficient - the entire array can be used for three (or any number of) stacks
No downgrade in speed - time complexity does not go to O(n) when array gets filled, it is always O(1)
Scalable - can be used for n stacks in one array

Drawbacks:
May be slower than "native" implementation - requires extra actions per operation
Extra space requirement - you need n+1 doubly linked lists for n stacks in the array
More complex to implement

Time complexity of all operations: O(1)
Extra space complexity: O(n) - for each element we add we need to write a single linked list node

Side note: not deleting old data makes it vulnerable for attacks that can read empty space to "undelete" data
 */

const DoublyLinkedList = require('../../../helpers/doubly-linked-list');

/**
 * Three stacks in one array. Space-efficient thanks to using linked lists for indexing
 * @param maxSize {number}     max size of all the stacks
 * @constructor
 */
function TripleStack(maxSize) {
    this.array = new Array(maxSize);
    this.maxSize = maxSize;
    this.emptySlots = new DoublyLinkedList();
    this.stack0indexes = new DoublyLinkedList();
    this.stack1indexes = new DoublyLinkedList();
    this.stack2indexes = new DoublyLinkedList();
}

/**
 * Push to a specific stack
 * @param stackNumber {number}  From 0 to 2
 * @param val {*}               Value to be saved in the array
 * @returns {boolean}           Success boolean
 */
TripleStack.prototype.push = function(stackNumber, val) {
    // check if array is full
    if (this.stack0indexes.getSize() + this.stack1indexes.getSize() + this.stack2indexes.getSize() >= this.maxSize) {
        return false;
    }

    let indexNode = this.emptySlots.getAtTail(), index;
    if (indexNode) {
        index = indexNode.val;
        this.emptySlots.delete(indexNode);
    } else {
        index = this.stack0indexes.getSize() + this.stack1indexes.getSize() + this.stack2indexes.getSize();
    }
    this[`stack${stackNumber}indexes`].appendAtTail(index);
    this.array[index] = val;

    return true;
};

/**
 * Pop item from a specific stack
 * @param stackNumber {number}      From 0 to 2
 * @return {*}                      Value stored at the top of the stack, or undefined
 */
TripleStack.prototype.pop = function(stackNumber) {
    const indexNode = this[`stack${stackNumber}indexes`].getAtTail();
    if (!indexNode) {
        return;
    }

    const val = this.array[indexNode.val];
    this[`stack${stackNumber}indexes`].delete(indexNode);
    this.emptySlots.appendAtTail(indexNode.val);
    return val;
};

/**
 * Get top item of a specific stack
 * @param stackNumber {number}      From 0 to 2
 * @returns {*}                     Value at the top of the stack
 */
TripleStack.prototype.top = function(stackNumber) {
    const indexNode = this[`stack${stackNumber}indexes`].getAtTail();
    if (!indexNode) {
        return;
    }

    return this.array[indexNode.val];
};

/**
 * Returns size of a specific stack
 * @param stackNumber {number}
 * @return {number}
 */
TripleStack.prototype.getSize = function(stackNumber) {
    return this[`stack${stackNumber}indexes`].getSize();
};

/**
 * Wrapper function for Triple Stack. Accepts operations and values, executes operations, returns array of results
 * @param size {number}         Max size of the array
 * @param operations {Array[]}  Array of operations
 * @return {array}              Array with results from operations
 */
module.exports = function wrapper(size, operations) {
    const stack = new TripleStack(size), results = [];
    for (let action of operations) {
        const [op, stackNumber, value] = action;
        results.push(stack[op](stackNumber, value));
    }

    return results;
};
