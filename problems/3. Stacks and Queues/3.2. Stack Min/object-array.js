/*
Stack with Min at each stack level
Keep a value and minimum so far in the stack. Update minimum when adding if added value is smaller than min
This keeps "minimum so far" in the stack at each level, if minimum is removed, minimum will be updated with next min val

Time complexity:
add: O(1)
top: O(1)
pop: O(1)
min: O(1)
 */

function StackMin() {
    this.stack = [];
}

StackMin.prototype.push = function(val) {
    let min = val;
    if (this.stack.length > 0) {
        min = Math.min(this.stack[this.stack.length - 1].min, val);
    }
    this.stack.push({val, min});
};

StackMin.prototype.pop = function() {
    const node = this.stack.pop();
    return node ? node.val : node;
};

StackMin.prototype.top = function() {
    const node = this.stack[this.stack.length - 1];
    return node ? node.val : node;
};

StackMin.prototype.min = function() {
    const node = this.stack[this.stack.length - 1];
    return node ? node.min : node;
};

/**
 * Wrapper function for Stack Min. Accepts stack and operations, executes operations, returns array of results
 * @param stack {array}     Array of items to be pushed to the Stack Min
 * @param ops {array}       Operations to be executed against stack after filling it
 * @return {array}          Array with results from operations
 */
module.exports = function wrapper(stack, ops) {
    const stackMin = new StackMin(), results = [];
    for (let val of stack) {
        stackMin.push(val);
    }

    for (let op of ops) {
        results.push(stackMin[op]());
    }

    return results;
};
