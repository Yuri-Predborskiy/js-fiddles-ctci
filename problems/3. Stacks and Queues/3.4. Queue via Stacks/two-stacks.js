/*
Queue using two stacks
We push into one stack
We pop from another stack
In order to change "mode" (start pushing after popping or vice versa) we "switch mode"
When we switch mode, we pop all elements from one stack and push them into reversed stack
Top items of reversed stack are those inserted first (so when we pop from reversed stack, it is FIFO)
Top items in normal order are those inserted last (so when we push to normal stack, it is FIFO)

Time complexity of a repeating operation: O(1)
Time complexity when changing operation: O(n)
 */

/**
 * Queue that is implemented via two stacks
 * @constructor
 */
function MyQueue() {
    this.stack = [];
    this.reversed = [];
    this.mode = 'push';
}

/**
 * Queue supports two modes of operation: push and pop. When switching mode, we move all items from one stack to another
 */
MyQueue.prototype.switchMode = function() {
    if (this.mode === 'push') {
        // desired mode is "reversed" to pop items at the start of the queue
        let item = this.stack.pop();
        while (item) {
            this.reversed.push(item);
            item = this.stack.pop();
        }
        this.mode = 'pop';
    } else {
        // desired mode is "normal" to push items to the end of the queue
        let item = this.reversed.pop();
        while (item) {
            this.stack.push(item);
            item = this.reversed.pop();
        }
        this.mode = 'push';
    }
};

/**
 * Push to Queue
 * @param val {*}               Value to be saved in the queue
 * @returns {boolean}           Success boolean
 */
MyQueue.prototype.push = function(val) {
    if (this.mode !== 'push') {
        this.switchMode();
    }
    this.stack.push(val);
};

/**
 * Pop item from queue
 * @return {*} next value in the queue, or undefined
 */
MyQueue.prototype.pop = function() {
    if (this.mode !== 'pop') {
        this.switchMode();
    }
    return this.reversed.pop();
};

/**
 * Get the next item to be popped from the queue
 * @returns {*} next value of the queue or undefined
 */
MyQueue.prototype.top = function() {
    if (this.mode !== 'pop') {
        this.switchMode();
    }
    return this.reversed[this.reversed.length - 1];
};

/**
 * Wrapper function for custom classes. Accepts operations and values, executes operations, returns array of results
 * @param operations {Array[]}  Array of operations
 * @return {array}              Array with results from operations
 */
module.exports = function wrapper(operations) {
    const stack = new MyQueue(), results = [];
    for (let action of operations) {
        const [op, value] = action;
        results.push(stack[op](value));
    }

    return results;
};
