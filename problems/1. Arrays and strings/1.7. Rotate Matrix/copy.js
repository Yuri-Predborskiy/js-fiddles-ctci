/*
Create a rotated copy of matrix

Time complexity: O(n), single pass
Space complexity: O(n)
 */

/**
 * Rotates matrix by 90 degrees clockwise, in place
 * @param {number[][]} matrix to be transformed
 * @return {number[][]}
 */
module.exports = function rotateMatrix(matrix) {
    if (matrix[0].length < 1) {
        return matrix;
    }

    const copy = new Array(matrix.length);
    for (let row = 0; row < matrix.length; row++) {
        copy[row] = new Array(matrix[0].length);
    }

    let len = matrix.length; // NxN matrix, height = width
    let max = len - 1;
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            copy[col][max - row] = matrix[row][col];
        }
    }
    return copy;
};
