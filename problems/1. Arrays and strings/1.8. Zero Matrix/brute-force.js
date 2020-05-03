/*
Create a copy of the matrix while setting rows/cols to 0 as they come

Time complexity: O((n*m)^2), iterating over same elements multiple times depending on inputs
Space complexity: O(n*m), creating a copy of the matrix
 */

/**
 * @param {number[][]} matrix to be zero-ed
 * @return {number[][]}
 */
module.exports = function zeroMatrix(matrix) {
    function setRowToZero(zeroed, row) {
        for (let col = 0; col < zeroed[row].length; col++) {
            zeroed[row][col] = 0;
        }
    }
    function setColToZero(zeroed, col) {
        for (let row = 0; row < zeroed.length; row++) {
            zeroed[row][col] = 0;
        }
    }

    let zeroed = new Array(matrix.length);
    for (let row = 0; row < matrix.length; row++) {
        zeroed[row] = new Array(matrix[row].length);
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                setRowToZero(zeroed, row);
                setColToZero(zeroed, col);
            } else if (zeroed[row][col] !== 0) {
                zeroed[row][col] = matrix[row][col];
            }
        }
    }

    return zeroed;
};
