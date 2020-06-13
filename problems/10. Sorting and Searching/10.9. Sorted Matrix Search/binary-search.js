/*
Find value in a 2d matrix
Use binary search to try to find target in every row

Time complexity: O(m*log(n)) m - number of rows, n - number of items in each row (matrix columns)
Space complexity: O(1)
 */

/**
 * Search for string in array that contains empty strings
 * @param matrix {number[][]}   sorted matrix where numbers are sorted both in rows and in columns but not overall
 * @param target {number}
 * @returns {number[]}          [row, col] or [-1, -1] if target is not found
 */
module.exports = function sortedMatrixSearch(matrix, target) {
    // perform binary search in each row
    function binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (array[mid] === target) {
                return mid;
            } else if (array[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }

    for (let row = 0; row < matrix.length; row++) {
        let result = binarySearch(matrix[row], target);
        if (result !== -1) {
            return [row, result];
        }
    }
    return [-1, -1];
};
