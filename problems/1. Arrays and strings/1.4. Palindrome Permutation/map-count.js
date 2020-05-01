/*
Collect every letter into hashtable (map) of strings.
Iterate over count. If any number is 1, it is unique. Only one can be unique.

Time complexity: O(2n) = O(n)
Space complexity: O(n)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
module.exports = function palindromePermutation(string) {
    const alphabet = new Set([...'abcdefghijklmnopqrstuvwxyz']);
    const arr = string.toLowerCase().split('');
    const map = {};

    for (let char of arr) {
        if (!alphabet.has(char)) {
            continue;
        }
        map[char] = (map[char] || 0) + 1;
    }

    let uniques = 0;
    for (let count of Object.values(map)) {
        if (count % 2 !== 0) {
            uniques++;
            if (uniques > 1) {
                return false;
            }
        }
    }

    return true;
};
