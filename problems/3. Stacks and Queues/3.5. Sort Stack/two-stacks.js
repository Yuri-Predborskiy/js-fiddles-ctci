/*
Sort stack using a second stack

Start:
pick an item from main stack and hold it in our hands
peek at top of the stack. If top of the stack is smaller, move the item into the main stack
else, while top item in temp stack is smaller than the item we're holding, pop from temp, push to main
when done, push to temp
then repeat from the start

Time complexity: O(n^2)
Space complexity: O(n) because we're using a second stack
 */

const Stack = require('../../../helpers/stack');

/**
 * Wrapper function for Triple Stack. Accepts operations and values, executes operations, returns array of results
 * @param items {Array[]}       Array of items to be pushed into the stack to be sorted
 * @return {array}              Array with results from operations
 */
module.exports = function sortStack(items) {
    const result = [];
    let stack = new Stack(), stackTemp = new Stack();
    for (let i = items.length - 1; i >= 0; i--) {
        stack.push(items[i]);
    }

    // what we want:
    // for the main stack to have smallest item at the top
    // to guarantee order, we need to have the smallest item at the bottom of temp stack
    while (!stack.isEmpty()) {
        const currentItem = stack.pop();
        while (!stackTemp.isEmpty() && stackTemp.peek() > currentItem) {
            stack.push(stackTemp.pop());
        }
        stackTemp.push(currentItem);
    }
    while (!stackTemp.isEmpty()) {
        stack.push(stackTemp.pop());
    }

    // this flip is made for results only. Stack is sorted with smallest items on top
    while (!stack.isEmpty()) {
        result.push(stack.pop());
    }
    return result;
};
