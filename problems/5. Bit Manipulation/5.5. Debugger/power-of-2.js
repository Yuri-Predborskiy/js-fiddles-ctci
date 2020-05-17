/*
Explanation copied from solutions

Time complexity: O(1)
Space complexity: O(1)
 */

module.exports = function myDebugger(n) {
    return (n & (n - 1)) === 0;
};
