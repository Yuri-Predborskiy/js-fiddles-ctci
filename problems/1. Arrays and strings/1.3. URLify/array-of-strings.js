/*
Rebuild the string by creating an array of symbols and copying non-space strings
Spaces are replaced with "%20" strings
Note: this is possible in JS because array can hold any type of values at the same time.

Time complexity: O(n) - iterating over the string once and joining array into string both require O(n) time
Space complexity: O(n) because strings in JS are immutable
 */

/**
 * @param {string} string
 * @param {number} length
 * @return {string}
 */
module.exports = function URLify(string, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        if (string[i] === ' ') {
            arr.push('%20');
        } else {
            arr.push(string[i]);
        }
    }
    return arr.join('');
};
