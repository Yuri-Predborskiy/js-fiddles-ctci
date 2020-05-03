/*
Iterate over the matrix once
Create sets of rows and columns of matrix which will need to be set to 0
Iterate over the matrix again, setting items at [row][col] to 0 if either row or col has been zeroed

Time complexity: O((n*m)), we iterate over the matrix a fixed number of times
Space complexity: O(n+m), keeping a list of rows and cols, matrix is updated in-place
 */

/**
 * @param {number[][]} matrix to be zero-ed
 * @return {number[][]}
 */
module.exports = function zeroMatrix(matrix) {
    const zeroRows = new Set();
    const zeroCols = new Set();
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeroRows.add(row);
                zeroCols.add(col);
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (zeroRows.has(row) || zeroCols.has(col)) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
};
