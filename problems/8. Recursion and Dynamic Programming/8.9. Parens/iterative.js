/*
Calculate all valid combinations of parentheses
All open p's should be closed and all closing p's should be opened prior to that
Number of pairs should match n

Iterative solution
Start with one opening parenthesis
At each step make a choice - either close one parenthesis (if open > 0) or open a new one (if open < n)

Time complexity: O(2^2n), exact multiplier seems to be closer to 2^(sqrt(2)*n)
Space complexity: O(2^2n)
 */

/**
 * Find all valid combinations of parentheses where number of open p's and closed p's is the same as n
 * @param n {number}
 * @returns {string[]}
 */
module.exports = function permutationsWithDups(n) {
    const results = [];
    if (n < 1) {
        return results;
    }

    const stack = [[['('], 1, 0]];
    while (stack.length > 0) {
        const [combination, open, closed] = stack.pop();
        if (combination.length === n * 2) {
            results.push(combination.join(''));
            continue;
        }
        if (closed < open) {
            const combo = combination.slice();
            combo.push(')');
            stack.push([combo, open, closed + 1]);
        }
        if (open < n) {
            combination.push('(');
            stack.push([combination, open + 1, closed]);
        }
    }

    return results;
};