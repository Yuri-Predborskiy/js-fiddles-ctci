/*
Actually swap actual pairs of actual bits
Which makes much more sense than using bitwise operations and bit mask (although would be more efficient, probably)
Just 3 operations! (in a loop)

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 *
 * @param binary {string}
 * @returns {string}
 */
module.exports = function bitwiseSwap(binary) {
    const result = binary.split('');
    let left = 0;
    let right = 1;
    while (right < binary.length) {
        let temp = binary[left];
        result[left] = binary[right];
        result[right] = temp;
        left += 2;
        right += 2;
    }

    return result.join('');
};
