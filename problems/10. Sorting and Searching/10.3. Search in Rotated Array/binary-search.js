/*
Having an array sorted in ascending order and rotated by a number of indexes, use binary search to find target

Algorithm:
Use binary search algorithm to find shift
Use binary search algorithm to find desired value, considering shift (add shift to middle, subtract length if overflow)

--- Alternative solution
Use binary search directly on rotated array
Practice shows this is overly complicated overly engineered solution without definite benefits
Unless working with huge inputs (gigabytes of data) when speed matters a LOT
--- end of alternative

Time complexity: O(log(n))
Space complexity: O(1)
*/

/**
 * Search in rotated sorted array of integers
 * @param array {number[]}  integer array
 * @param target {number}   target integer
 * @returns {number}        index of desired value, or -1 if it is not found
 */
module.exports = function groupAnagrams(array, target) {
    function findPivot() {
        let left = 0;
        let right = array.length - 1;
        if (array[left] < array[right]) {
            return 0;
        }
        // pivot is guaranteed to exist and should be between 1 and length - 1, inclusive
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const prev = array[mid > 0 ? mid - 1 : array.length - 1];
            if (prev > array[mid]) {
                return mid;
            } else if (array[left] > array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    let shift = findPivot();
    let left = 0;
    let right = array.length;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let index = mid + shift >= array.length ? mid + shift - array.length : mid + shift;
        if (array[index] === target) {
            return index;
        } else if (array[index] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
