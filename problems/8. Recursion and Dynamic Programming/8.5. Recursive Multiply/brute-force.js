/*
Multiplication using addition
Given a number of items, add them up desired number of times

This answer can be improved

Time complexity: O(n), runtime can be improved
Space complexity: O(1)
 */

/**
 * Multiply without using * operator or / operator, using addition, subtraction, bit shift and modulo
 * @param left {number}
 * @param right {number}
 * @returns {number}
 */
module.exports = function recursiveMultiply(left, right) {
    let result = 0;
    let cnt = 0;
    while (cnt < right) {
        result += left;
        cnt++;
    }
    return result;
};