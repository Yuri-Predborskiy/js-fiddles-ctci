/*
Calculate all the ways you can put parenthesis in an expression, including (every) (single) (expression)
Use recursion

Time complexity: O(exp)
Space complexity: O(exp)
 */

/**
 * Calculate how many times you can push parenthesis around an expression while having same result as input
 * @param expression {string}
 * @param result {boolean}
 * @returns {number}
 */
module.exports = function booleanEvaluation(expression, result) {
    if (expression.length === 0) {
        return 0;
    }
    if (expression.length === 1) {
        if (result) {
            return expression === '1' ? 1 : 0;
        } else {
            return expression === '0' ? 1 : 0;
        }
    }

    let ways = 0;
    for (let i = 1; i < expression.length; i+= 2) {
        const char = expression[i];
        let left = expression.substring(0, i);
        let right = expression.substring(i + 1, expression.length);

        const leftTrue = booleanEvaluation(left, true);
        const leftFalse = booleanEvaluation(left, false);
        const rightTrue = booleanEvaluation(right, true);
        const rightFalse = booleanEvaluation(right, false);
        const total = (leftTrue + leftFalse) * (rightTrue + rightFalse);

        let totalTrue = 0;
        if (char === '^') {
            totalTrue = leftTrue * rightFalse + leftFalse * rightTrue;
        } else if (char === '&') {
            totalTrue = leftTrue * rightTrue;
        } else if (char === '|') {
            totalTrue = leftTrue * rightTrue + leftFalse * rightTrue + leftTrue * rightFalse;
        }

        let subWays = result ? totalTrue : total - totalTrue;
        ways += subWays;
    }

    return ways;
};
