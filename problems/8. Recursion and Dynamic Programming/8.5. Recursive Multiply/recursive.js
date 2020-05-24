/*
Multiplication without using * operator

Break smaller number into halves till you reach 1
Combine bigger number with bigger number, return sum
At each following steps, keep combining resulting numbers till you reach result.
This way we can calculate result in a much faster time compared to linear sum

Solution algorithm taken from the book.

Time complexity: O(log(n)) where n is smaller number
Space complexity: O(1)
 */

/**
 * Multiply without using * operator or / operator, using addition, subtraction, bit shift and modulo
 * @param left {number}
 * @param right {number}
 * @returns {number}
 */
module.exports = function recursiveMultiply(left, right) {
    function helper(smaller, bigger) {
        if (smaller === 0) {
            return 0;
        } else if (smaller === 1) {
            return bigger;
        }

        const half = smaller >> 1; // divide by 2 and keep integer part, all without using / operator
        let halfProduct = helper(half, bigger);

        let double = halfProduct + halfProduct;
        if (smaller % 2 === 0) {
            return double;
        } else {
            return double + bigger;
        }
    }

    return helper(Math.min(left, right), Math.max(left, right));
};