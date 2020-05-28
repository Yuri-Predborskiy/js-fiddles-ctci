/*
Calculate the number of ways to put N queens on a chess board (with N being 8) in a way so that
    no queen could attack another queen (no other queen on same diagonal, same row or same column)

Backtracking algorithm. We have to try every possible solution and write down the number of boards where it all works

Solution based on textbook solution.

Time complexity: O(2^n)
Space complexity: O(2^n)
https://medium.com/@jmohon1986/timeout-the-story-of-n-queens-time-complexity-c80636d92f8ba
 */

/**
 * Place N queens on NxN board so that they are not in each other's way (different row, col, diagonal)
 * @param number {number}
 * @returns {number}
 */
module.exports = function eightQueens(number) {
    function placeQueen(row, columns) {
        if (row === number) {
            results.push(columns.slice());
        } else {
            for (let col = 0; col < number; col++) {
                if (placementIsValid(columns, row, col)) {
                    columns[row] = col; // place queen
                    placeQueen(row + 1, columns);
                }
            }
        }
    }

    function placementIsValid(columns, row1, column1) {
        for (let row2 = 0; row2 < row1; row2++) {
            let column2 = columns[row2];
            // check if two queens occupy same column
            if (column1 === column2) {
                return false;
            }

            // check diagonal
            const colDist = Math.abs(column2 - column1);
            const rowDist = row1 - row2;
            if (colDist === rowDist) {
                return false;
            }
        }
        return true;
    }
    const results = [];

    placeQueen(0, new Array(number).fill(-1));

    return results.length;
};
