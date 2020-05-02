/*
Iterate over string, remembering last char. If char is the same, increment counter
Once it changes - push counter and char to result array, save new char and reset counter to 1

Time complexity: O(n), single pass
Space complexity: O(n), needed for output string (immutable)
 */

/**
 * Compresses repeating characters in a string, adding number of repeats. Returns input in case of compression fail
 * @param {string} string String to be compressed
 * @return {string}
 */
module.exports = function stringCompression(string) {
    const output = [];
    let last = string[0], count = 1;
    for (let i = 1; i <= string.length; i++) {
        if (string[i] === last) {
            count++;
        } else {
            output.push(last + count);
            last = string[i];
            count = 1;
        }
    }
    const outString = output.join('');
    return outString.length < string.length ? outString : string;
};
