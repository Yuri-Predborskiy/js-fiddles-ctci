/*
Create a memoization table
Each cell of the table contains a number of ways one point can be reached
Starting with 1st step, look at points from where you can reach this point
In our case we can jump to next step (index + 1), over one step (index + 2) and over 2 steps (index + 3)
But this algorithm can be used with any number of jumps of any length
To calculate number of ways you can reach a point, look back at points from which you can reach the current point
    and add values in them. Out of bounds points give you 0 paths, while starting point gives 1 path.
Return last value (n-th element) in DP table

Time complexity: O(n*m) where n is the number of steps and m is the number of types of jumps available
Space complexity: O(n)
 */

/**
 * Count number of paths we can take to climb n stairs, considering we can jump 1,2 or 3 stairs at a time
 * @param n {number}    number of stairs we should climb
 * @returns {number}
 */
module.exports = function tripleStep(n) {
    if (n < 2) {
        return 1;
    }

    const steps = [1, 2, 3]; // can be replaced with any number of steps that move any number of cells forward
    const dp = [1];
    for (let i = 1; i <= n; i++) {
        let stepsTotal = 0;
        for (const step of steps) {
            stepsTotal += dp[i - step] || 0;
        }
        dp[i] = stepsTotal;
    }
    return dp[n]
};