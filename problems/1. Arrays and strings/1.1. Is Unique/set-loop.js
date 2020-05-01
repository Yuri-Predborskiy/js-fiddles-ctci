/*
Iterate over every character in the string. Add every character to a Set if it is not present.
Return false is item is present.

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
module.exports = function isUnique(string) {
    let set = new Set();
    for (let i = 0; i < string.length; i++) {
        if (set.has(string[i])) {
            return false;
        }
        set.add(string[i]);
    }
    return true;
};
