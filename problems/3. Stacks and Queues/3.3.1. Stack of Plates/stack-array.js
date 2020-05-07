/*
Set of stacks - stack that includes other stacks of fixed size
When one stack is full, new stack is created and new elements are added to the next one
Stack size is defined when set of stacks is created

Time complexity of every operation: O(1)
 */

function SetOfStacks(maxSize) {
    this.maxSize = maxSize;
    this.stacks = [];
}

SetOfStacks.prototype.push = function(val) {
    const stack = this.stacks[this.stacks.length - 1];
    if (!stack || stack.length === this.maxSize) {
        this.stacks.push([val]);
    } else {
        stack.push(val);
    }
};

SetOfStacks.prototype.pop = function() {
    const stack = this.stacks[this.stacks.length - 1];
    if (!stack) {
        return;
    }
    const val = stack.pop();
    if (stack.length === 0) {
        this.stacks.pop();
    }
    return val;
};

SetOfStacks.prototype.top = function() {
    const stack = this.stacks[this.stacks.length - 1];
    if (stack) {
        return stack[stack.length - 1];
    }
};

SetOfStacks.prototype.getSize = function() {
    return this.stacks.length;
};

/**
 * Wrapper function for Stack Min. Accepts stack and operations, executes operations, returns array of results
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
