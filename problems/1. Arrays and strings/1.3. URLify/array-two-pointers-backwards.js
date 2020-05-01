/*
Go over a string from the back with two pointers.
First pointer looks at the end of the array.
Second pointer starts at the end of the "true length" of the string.
Copy symbols from "true length" point into the actual end of the array, one at a time
If you encounter a space, replace space with %20 (three symbols)

Tests assume the input is as large as output should be, and length provided will match the length of actual input,
    without considering the extra space allocated for replaced spaces.

Time complexity: O(n)
Space complexity: O(1) in-place replacement, O(n) for returning a string
 */

/**
 * @param {array} charArray
 * @param {number} length
 * @return {string}
 */
module.exports = function URLify(charArray, length) {
    let left = length - 1;
    let right = charArray.length - 1;

    while (left >= 0) {
        let char = charArray[left--];
        if (char === ' ') {
            charArray[right--] = '0';
            charArray[right--] = '2';
            charArray[right--] = '%';
        } else {
            charArray[right--] = char;
        }
    }
    return charArray.join('');
};
