const DoublyLinkedList = require('../../../helpers/doubly-linked-list');

/*
Set of stacks - stack that includes other stacks of fixed size
When one stack is full, new stack is created and new elements are added to the next one
Stack size is defined when set of stacks is created
There is a popFrom method, which allows user to pop element from a specific stack
Stacks are saved as values of a doubly linked list. This gives O(1) time to read / pop top from any stack
Specific stack can be accessed via a map of stacks. Map (stack ID, stack) allows O(1) access to specific stack
Doubly linked list allows removing empty stacks in O(1) time.
Map allows finding any stack in linked list by ID in O(1) time.
Finally, using arrays allows pop() in O(1) time from any stack.

In total: O(1) time for push, pop, popFrom, size (number of stacks in use), top
Space complexity: O(n) because of doubly linked list of stacks and stack map
 */

function SetOfStacks(maxSize) {
    this.maxSize = maxSize;
    this.stackList = new DoublyLinkedList();
    this.stackMap = new Map();
}

SetOfStacks.prototype.push = function(val) {
    const stackNode = this.stackList.getAtTail();
    if (!stackNode || stackNode.val.length === this.maxSize) {
        this.stackList.appendAtTail([val]);
        const inserted = this.stackList.getAtTail();
        this.stackMap.set(this.stackList.getSize() - 1, inserted);
    } else {
        stackNode.val.push(val);
    }
};

SetOfStacks.prototype.pop = function() {
    const stackNode = this.stackList.getAtTail();
    if (!stackNode) {
        return;
    }
    const val = stackNode.val.pop();
    if (stackNode.val.length === 0) {
        this.stackMap.delete(this.stackList.getSize() - 1);
        this.stackList.delete(stackNode);
    }
    return val;
};

SetOfStacks.prototype.popFrom = function(stackNum) {
    const stackNode = this.stackMap.get(stackNum);
    if (!stackNode) {
        return;
    }
    const val = stackNode.val.pop();
    if (stackNode.val.length === 0) {
        this.stackMap.delete(stackNum);
        this.stackList.delete(stackNode);
    }
    return val;
};

SetOfStacks.prototype.top = function() {
    const stackNode = this.stackList.getAtTail();
    if (stackNode) {
        return stackNode.val[stackNode.val.length - 1];
    }
};

SetOfStacks.prototype.getSize = function() {
    return this.stackList.getSize();
};

/**
 * Wrapper function for custom classes. Accepts stack and operations, executes operations, returns array of results
 * @param stack {array}     Array of items to be pushed to the Stack Min
 * @param maxSize {number}  Max number of elements in one stack
 * @param ops {array}       Operations to be executed against stack after filling it
 * @return {array}          Array with results from operations
 */
module.exports = function wrapper(stack, maxSize, ops) {
    const setOfStacks = new SetOfStacks(maxSize), results = [];
    for (let val of stack) {
        setOfStacks.push(val);
    }

    for (let op of ops) {
        const operations = op.split(':');
        results.push(setOfStacks[operations[0]](Number.parseInt(operations[1], 10)));
    }

    return results;
};
