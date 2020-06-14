/*
Find value in a 2d matrix
Use binary search to try to find target in every row

Optimizations added:
- if first value in a row larger than target, skip this row
- if last value in a row is smaller than target, skip this row
- if last value in a column is smaller than target, skip this column
- if first value in a column is greater than target, skip this column

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
    function binarySearch(array, target, start, finish) {
        let left = start;
        let right = finish;
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

    let globalLeft = 0, globalRight = matrix[0].length - 1;
    const firstRow = matrix[0];
    const lastRow = matrix[matrix.length - 1];
    for (let col = 0; col < matrix.length; col++) {
        if (lastRow[col] < target) {
            globalLeft = col + 1;
        }
        if (firstRow[col] > target) {
            globalRight = col - 1;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        const nums = matrix[row];
        if (nums[nums.length - 1] < target || nums[0] > target) {
            continue;
        }
        let result = binarySearch(nums, target, globalLeft, globalRight);
        if (result !== -1) {
            return [row, result];
        }
    }
    return [-1, -1];
};
