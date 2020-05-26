/*
Calculate all valid combinations of parentheses
All open p's should be closed and all closing p's should be opened prior to that
Number of pairs should match n

Recursive solution
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
module.exports = function parens(n) {
    function addParen(combo, open, closed) {
        if (combo.length === n * 2) {
            results.push(combo);
            return;
        }
        if (closed < open) {
            addParen(combo + ')', open, closed + 1);
        }
        if (open < n) {
            addParen(combo + '(', open + 1, closed);
        }
    }

    const results = [];
    addParen('(', 1, 0);
    return results;
};