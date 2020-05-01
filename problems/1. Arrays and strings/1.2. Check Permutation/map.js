/*
Create a map (hash table, dictionary)
Iterate over items in string A. Add every string to map. Key - char, value - 1. If it repeats, increment number.
Iterate over items in string B. If map doesn't have char or amount is 0, return false. Else, decrement value.

Time complexity: O(n) - iterating over inputs twice
Space complexity: O(n) for storing a map of strings
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
module.exports = function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const map = {};
    for (let i = 0; i < str1.length; i++) {
        map[str1[i]] = (map[str1[i]] || 0) + 1;
    }
    for (let j = 0; j < str2.length; j++) {
        if (!map[str2[j]]) {
            return false;
        }
        map[str2[j]]--;
    }
    return true;
};
