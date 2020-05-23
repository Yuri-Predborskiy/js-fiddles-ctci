/*
Power Set - create a set of all subsets (including empty subset and full input)
Solution using dynamic programming: break the problem into a set of sub-problems
Each problem is a choice: to add current element to the current combination or not
First we process the "do not add" choice and make a copy of current combination and push it to stack
We also push the next index to stack to keep track of index we're working with
Secondly, we process the "add" choice - add current item to combination, push it to stack
We also push the next index to stack to keep track of index we're working with
Note that this step is repetitive, but it can't be avoided (unless we write a push function)

When index matches input length, we've processed all possible combinations (all subsets of input set)

Time complexity: O(2^n)
Space complexity: O(2^n)
 */

/**
 * Find all sub-sets of a set
 * @param inputs {[]}    Inputs array
 * @returns {[]}
 */
module.exports = function powerSet(inputs) {
    const results = [];
    const stack = [[[], 0]];

    while(stack.length > 0) {
        const [combination, index] = stack.pop();
        // we have reached the final index of combination, push to results and exit
        if (index === inputs.length) {
            results.push(combination);
            continue;
        }
        // do not add current element, make a copy of existing combination and push it to stack
        stack.push([[...combination], index + 1]);

        // add current element to combination and push it to stack
        combination.push(inputs[index]);
        stack.push([combination, index + 1]);
    }

    return results;
};