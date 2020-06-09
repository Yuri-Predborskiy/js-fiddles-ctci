/*
Find value in sorted array of positive integers, while having a collection with no "size" property of method

To solve this problem we "poke" the collection, one item at a time, till we find an index that either does not exist
    or has a value greater than target. This way we can define upper bound of our search (in place of size)
Then we can perform "normal" binary search. Except, if we get a -1, this is to be treated as "value is greater than
    target" because it is a value outside of the limits of the collection

Wrapper function and "Listy" data structure have been created for the purpose of this task

Solution has been inspired by CTCI solutions

Time complexity: O(log(n))
Space complexity: O(1)
 */

/**
 * Search in rotated sorted array of integers
 * @param listy {Listy}  integer collection that does not have "size" or "length" property/method
 * @param target {number}   target integer
 * @returns {number}        index of desired value, or -1 if it is not found
 */
function sortedSearchNoSize(listy, target) {
    let left = 0;
    let right = 1;
    let next = listy.elementAt(right);
    while (next !== -1 && next <= target) {
        if (listy.elementAt(right) === target) {
            return right;
        }
        right *= 2;
        next = listy.elementAt(right);
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let item = listy.elementAt(mid);
        if (item === target) {
            return mid;
        } else if (item > target || item === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

/**
 * Wrapper function for the problem, accepts array and turns it into a "listy" object
 * @param array {number[]}      number array that contains only positive integers
 * @param target {number}       target we are looking for
 * @returns {number}            index of target value, or -1 if it is not found
 */
module.exports = function wrapper(array, target) {
    let arrayLike = new Listy(array);
    return sortedSearchNoSize(arrayLike, target);
};

function Listy(array) {
    this.data = array.slice();
}

Listy.prototype.elementAt = function (index) {
    if (index >= this.data.length || index < 0) {
        return -1;
    }
    return this.data[index];
}
