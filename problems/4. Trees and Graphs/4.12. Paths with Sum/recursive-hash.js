/*
Textbook solution.
Total paths is number of times you've seen a special number
This special number represents a number of times you've seen a number, which,
    subtracted from running sum, would give you target sum.
Example: you've seen running sum of 10 once. Your current running sum is 18. If you remove target from running sum,
    you will have 10. Since you've seen 10, you've been at a point, when (ignoring sum up to that point) you'd have
    running sum equal to targetSum.

Hopefully this explanation reminds me why this works at some point in the future if I ever review this question.

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * Find all paths that sum up to targetSum and return their count
 * @param root {TreeNode}       Root of the tree
 * @param targetSum {number}    Sum to be found
 * @returns {boolean}
 */
function pathsWithSum(root, targetSum) {
    function helper(node, runningSum) {
        if (!node) {
            return 0;
        }

        runningSum += node.val;
        let totalPaths = map.get(runningSum - targetSum) || 0;

        if (runningSum === targetSum) {
            totalPaths++;
        }
        map.set(runningSum, (map.get(runningSum) || 0) + 1);
        totalPaths += helper(node.left, runningSum);
        totalPaths += helper(node.right, runningSum);
        map.set(runningSum, map.get(runningSum) - 1);

        return totalPaths;
    }

    const map = new Map();
    return helper(root, 0);
}

module.exports = pathsWithSum;