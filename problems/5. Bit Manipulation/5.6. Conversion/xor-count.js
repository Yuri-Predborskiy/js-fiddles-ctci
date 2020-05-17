/*
Theoretical problem
Omitted for now

Time complexity: O(1)
Space complexity: O(1)
 */

/**
 *
 * @param left {number}
 * @param right {number}
 * @returns {number}
 */
module.exports = function conversion(left, right) {
    const xor = (left ^ right).toString(2);
    let count = 0;
    for (let b of xor) {
        if (b === '1') {
            count++;
        }
    }
    return count;
};
