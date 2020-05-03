/*
Write every character in the string into a Set (when defining the set).
If set size = string length, every item is unique.
This solution uses JS Set property - when an item is added which is already in the Set, the item is effectively ignored
If you initialize a Set with an array of characters (string.split('')), all unique characters will be added to the Set
Non-unique characters will be ignored.
Thus, if Set size is equal to string length, string has only unique characters

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
module.exports = function isUnique(string) {
    let set = new Set(string.split(''));
    return set.size === string.length;
};
