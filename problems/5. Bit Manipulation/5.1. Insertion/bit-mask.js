/*
Create a bit mask for insertion, which will have all 0s in the place where we insert bits, and 1s elsewhere.
Apply bit mask to N (N AND bitMask)
Shift bits of M into correct starting position
Apply OR to masked N and shifted M
Return result

Time complexity: O(1), calculation takes a fixed number of operations regardless of input
Space complexity: O(n)
 */

module.exports = function insertion(n, m, i, j) {
    const ones = ~0;
    const left = ones << (j + 1);
    const right = ((1 << i) - 1);
    const mask = left | right;
    const nWithMaskApplied = n & mask;
    const mShifted = m << i;

    return nWithMaskApplied | mShifted;
};