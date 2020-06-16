/*
Move items in such a way that every item is surrounded either by 2 bigger numbers or 2 smaller ones

Swapping is done using JS destructuring

Idea inspired by book solution.

Time complexity: O(n*log(n)) for sorting
Space complexity: O(1)
 */

/**
 * Move elements in such a manner that every other element is a hill next to a valley
 * @param numbers {number[]}    numbers that should be zig-zag-ed
 * @returns {number[]}
 */
module.exports = function peaksAndValleys(numbers) {
    // if we don't want to change inputs, we should make a copy of numbers here
    if (numbers.length < 3) {
        return numbers;
    }
    numbers.sort((a, b) => a - b);
    for (let i = 1; i < numbers.length; i += 2) {
        [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
    }
    return numbers;
}
