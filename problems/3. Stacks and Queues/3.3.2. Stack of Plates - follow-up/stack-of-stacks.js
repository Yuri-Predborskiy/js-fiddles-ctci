/*
Set of stacks - stack that includes other stacks of fixed size
When one stack is full, new stack is created and new elements are added to the next one
Stack size is defined when set of stacks is created
There is a popFrom method, which allows user to pop element from a specific stack
When we use pop and popFrom, and the stack becomes empty, that stack is removed from the set
This is to prevent accumulation of empty stacks

Time complexity: O(1) for push, pop, popFrom, size, top
Space complexity: O(1), no *extra* space is used per stack
 */

const Stack = require('../../../helpers/stack');

function SetOfStacks(maxSize) {
    this.stacks = [new Stack()];
    this.maxSize = Math.max(maxSize, 1);
}

SetOfStacks.prototype.push = function(val) {
    let stack = this.stacks[this.stacks.length - 1];
    // alternative to stack size would be to create an array of stack sizes and update it with the main data
    if (!stack || stack.size() >= this.maxSize) {
        const length = this.stacks.push(new Stack());
        stack = this.stacks[length - 1];
    }

    stack.push(val);
};

SetOfStacks.prototype.pop = function() {
    const stack = this.stacks[this.stacks.length - 1];
    if (!stack) {
        return;
    }

    const val = stack.pop();
    if (stack.isEmpty()) {
        this.stacks.pop();
    }
    return val;
};

SetOfStacks.prototype.popFrom = function(stackIndex) {
    const stack = this.stacks[stackIndex];
    if (!stack) {
        return;
    }

    const val = stack.pop();
    if (stack.isEmpty()) {
        this.stacks.splice(stackIndex, 1);
    }
    return val;
};

SetOfStacks.prototype.top = function() {
    const stack = this.stacks[this.stacks.length - 1];
    if (!stack) {
        return;
    }
    return stack.top();
};

SetOfStacks.prototype.getSize = function() {
    return this.stacks.length;
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
