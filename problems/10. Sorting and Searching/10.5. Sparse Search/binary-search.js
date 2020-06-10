/*
Find value in a string array that contains empty strings
If mid is empty string, increment mid till you either find a non-empty string, or it hits right
Treat empty string as "too big" and move right boundary to original mid value - 1
Left limit can be moved to mid when string is "smaller" than target

Time complexity: O(log(n)) average, O(n) worst case (if most elements are empty strings)
Space complexity: O(1)
 */

/**
 * Search for string in array that contains empty strings
 * @param array {string[]}  string array that may contain empty strings
 * @param target {string}   target string
 * @returns {number}        index of desired value, or -1 if it is not found
 */
module.exports = function wrapper(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        while (array[mid] === '' && mid < right) {
            mid++;
        }
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target || array[mid] === '') {
            right = Math.floor((left + right) / 2) - 1; // take "old" mid value
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
