/*
Calculate all permutations of a string that may contain duplicates
The problem: need to build all possible orders of items
Solution: break string into individual items and add one item at a time, keeping track of added items in a set
Add one letter per iteration, till the permutation is done

Iterative solution using stack. At each point we create a new string and a new set based on existing items
Then we add one item to the string and add it to map. Do not add if the number of characters is maximum.

Time complexity: O(n! * n)
Space complexity: O(n!)
 */

/**
 * Find all permutations of a string
 * @param string {string}
 * @returns {string[]}
 */
module.exports = function permutationsWithDups(string) {
    const results = [];
    const resultSet = new Set();
    if (string.length < 1) {
        return results;
    }

    const maxAmounts = new Map();
    const stack = [];
    for (const char of string) {
        stack.push([char, new Map([[char, 1]])]);
        maxAmounts.set(char, (maxAmounts.get(char) || 0) + 1);
    }

    while (stack.length > 0) {
        let [permutation, charMap] = stack.pop();
        if (permutation.length === string.length) {
            if (!resultSet.has(permutation)) {
                resultSet.add(permutation);
                results.push(permutation);
            }
            continue;
        }
        for (let char of string) {
            if (charMap.has(char) && charMap.get(char) === maxAmounts.get(char)) {
                continue;
            }
            const map = new Map(charMap);
            map.set(char, (map.get(char) || 0) + 1);
            stack.push([permutation + char, map]);
        }
    }

    return results;
};