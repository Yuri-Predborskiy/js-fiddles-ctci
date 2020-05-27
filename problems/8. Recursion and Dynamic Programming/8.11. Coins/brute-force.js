/*
Calculate the number of ways to represent a fixed amount using various coins: 25, 10, 5 or 1s

Brute force:
Take as many coins of the biggest valuation as you can
Repeat for other coin types, down to pennies
Pennies are calculated as sum - total of other coins (we fill remainder with pennies)
Increment number of combination for each iteration

This algorithm has been hard-coded to work with specific coin nominations, but can be updated to use any kind of coins

This also allows us to get all possible combinations of coins if we add combinations into a collection,
    but this has been commented out to improve performance

Time complexity: O(n^4), very slow for large sums
Space complexity: O(1)
 */

/**
 * Find all valid combinations of coins to represent n cents
 * @param sum {number}
 * @returns {number}
 */
module.exports = function coins(sum) {
    // const results = [];
    let count = 0;
    if (sum < 1) {
        return count;
    }

    // brute force - try every type of coin any number of times you can, fill up the rest with pennies
    // algorithm gets very slow at sum = 500 or higher
    for (let quarters = Math.floor(sum / 25); quarters >= 0; quarters--) {
        const remainderAfterQuarters = sum - 25 * quarters;
        for (let dimes = Math.floor(remainderAfterQuarters / 10); dimes >= 0; dimes--) {
            const remainderAfterDimes = remainderAfterQuarters - 10 * dimes;
            for (let nickels = Math.floor(remainderAfterDimes / 5); nickels >= 0; nickels--) {
                // const pennies = sum - (25 * quarters + 10 * dimes + 5 * nickels);
                // results.push([quarters, dimes, nickels, pennies]);
                count++;
            }
        }
    }
    // return results.length;
    return count;
};
