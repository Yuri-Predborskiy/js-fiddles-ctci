/*
Rotate NxN matrix in place, using O(1) space
Swap numbers using a single temp variable

Time complexity: O(n), single pass
Space complexity: O(1), in place
Cognitive complexity: mind-blowing
 */

/**
 * Rotates matrix by 90 degrees clockwise, in place
 * @param {number[][]} matrix to be transformed
 * @return {number[][]}
 */
module.exports = function rotateMatrix(matrix) {
    function swap(row1, col1, row2, col2) {
        let temp = matrix[row2][col2];
        matrix[row2][col2] = matrix[row1][col1];
        matrix[row1][col1] = temp;
    }

    const shiftMax = Math.floor(matrix.length / 2);
    for (let shift = 0; shift < shiftMax; shift++) {
        let len = matrix.length - 1;
        let max = len - shift;
        for (let index = shift; index < max; index++) {
            swap(shift, index, index, max);
            swap(shift, index, max, len - index);
            swap(shift, index, len - index, shift);
        }
    }
    return matrix;
};
