/*
Without using other data structures: strings only.
Brute force - for every character check if there is an identical character in the string

Time complexity: O(n^2)
Space complexity: O(1)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
module.exports = function isUnique(string) {
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
};
