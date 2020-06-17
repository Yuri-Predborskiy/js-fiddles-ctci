/*
Move items in such a way that every item is surrounded either by 2 bigger numbers or 2 smaller ones

Optimized solution - no sorting is performed, better time complexity
Go over the array starting with 1st element and make sure every 2nd element is the biggest of the three elements
Three elements that form a group are left, right and middle. Middle should be the biggest.
If biggest element is not in the middle, swap the biggest element with the middle element
Swapping is done using JS destructuring

Idea inspired by book solution.

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * Move elements in such a manner that every other element is a hill next to a valley
 * @param numbers {number[]}    numbers that should be zig-zag-ed
 * @returns {number[]}
 */
module.exports = function peaksAndValleys(numbers) {
    function getIndexOfMaxValue(left, mid, right) {
        function getValueAtIndex(index) {
            return typeof numbers[index] === 'undefined' ? -Infinity : numbers[index];
        }
        const leftValue = getValueAtIndex(left);
        const midValue = getValueAtIndex(mid);
        const rightValue = getValueAtIndex(right);

        const max = Math.max(leftValue, midValue, rightValue);
        if (max === leftValue) {
            return left;
        } else if (max === midValue) {
            return mid;
        } else {
            return right;
        }
    }

    if (numbers.length < 3) {
        return numbers;
    }

    for (let i = 1; i < numbers.length; i += 2) {
        const maxIndex = getIndexOfMaxValue(i - 1, i, i + 1);
        if (i !== maxIndex) {
            [numbers[i], numbers[maxIndex]] = [numbers[maxIndex], numbers[i]];
        }
    }
    return numbers;
}
