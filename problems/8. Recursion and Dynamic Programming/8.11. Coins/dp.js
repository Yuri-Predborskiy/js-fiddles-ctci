/*
Calculate the number of ways to represent a fixed amount using various coins: 25, 10, 5 or 1s

Dynamic programming approach
Create a 2D table that represents coin types and number of ways you can represent the sum using those coins
For the first row (smallest coin type) the formula is "can we express this amount using current coin?"
    If the answer is "yes", we write "1", otherwise we write "0".
    The idea is: we can't represent 3 or 8 using nickels alone.
Starting with 2nd row the amount is calculated as a sum of top result (smaller coin type) and previous result for
    current coin type: dp[coinType][sum - coinTypes[coinType]]
Example: for sum = 6 and coin type (1) = 5, this would be dp[0][6] + dp[1][6-5] = dp[0][6] + dp[1][1]
First row, 0-th column represents sum of 0 and is always filled with 1s - for simplicity.

Coin types are fixed in this problem, but it can be easily modified for any number of any types of coins

Time complexity: O(n*m) where n = sum, m - number of distinct coins
Space complexity: O(n*m)
 */

/**
 * Find all valid combinations of coins to represent n cents
 * @param sum {number}
 * @returns {number}
 */
module.exports = function coins(sum) {
    const coinTypes = [1, 5, 10, 25];
    if (sum <= coinTypes[0]) {
        return 0;
    }

    const dp = new Array(coinTypes.length);
    for (let i = 0; i < coinTypes.length; i++) {
        dp[i] = new Array(sum + 1);
        dp[i][0] = 1;
    }

    for (let coinType = 0; coinType < coinTypes.length; coinType++) {
        for (let s = 1; s <= sum; s++) {
            if (coinType === 0) {
                dp[coinType][s] = s % coinTypes[coinType] === 0 ? 1: 0;
            } else {
                dp[coinType][s] = dp[coinType - 1][s] + (dp[coinType][s - coinTypes[coinType]] || 0);
            }
        }
    }

    return dp[coinTypes.length - 1][sum];
};
