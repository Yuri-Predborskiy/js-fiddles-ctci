/*
Brute force - iterate over the array and see if magic index exists. Return magic index or null if it is not found

Benefits: works with both unique numbers and duplicates, sorted and unsorted inputs
Drawbacks: sub-optimal time complexity for sorted inputs

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * Find magic index where array[i] = i
 * @param numbers {number[]}    Input array
 * @returns {number|null}
 */
module.exports = function magicIndex(numbers) {
    if (!numbers || numbers.length === 0) {
        return null;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === i) {
            return i;
        }
    }

    return null;
};