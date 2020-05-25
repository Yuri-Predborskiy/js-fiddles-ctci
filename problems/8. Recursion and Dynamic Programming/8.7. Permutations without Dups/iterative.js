/*
Calculate all permutations of a string that does not contain duplicates
The problem: need to build all possible orders of items
Solution: break string into individual items and add one item at a time, keeping track of added items in a set
Add one letter per iteration, till the permutation is done
Divide and conquer? Dynamic programming?

Iterative solution using stack. At each point we create a new string and a new set based on existing items
Then we add one item to the string and add it to set. Skip it if it is already in the set.

Time complexity: O(n! * n)
Space complexity: O(n!)
 */

/**
 * Find all permutations of a string
 * @param string {string}
 * @returns {string[]}
 */
module.exports = function powerSet(string) {
    const results = [];
    if (string.length < 1) {
        return results;
    }

    const stack = [];
    for (const char of string) {
        stack.push([char, new Set([char])]);
    }

    while (stack.length > 0) {
        let [permutation, charSet] = stack.pop();
        if (permutation.length === string.length) {
            results.push(permutation);
            continue;
        }
        for (let char of string) {
            if (charSet.has(char)) {
                continue;
            }
            const set = new Set(charSet);
            set.add(char);
            stack.push([permutation + char, set]);
        }
    }

    return results;
};