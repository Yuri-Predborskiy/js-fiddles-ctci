/*
If tree is balanced: the difference of depth of left sub-tree and right sub-tree is no more than 1
Solution using recursion.
Benefit of recursion: simplicity
Drawback of recursion: we can't exit early

Time complexity: O(n)
Space complexity: O(1), outside of recursion stack
 */

/**
 * Return value of next node in in-order traversal (left, root, right)
 * @param root {TreeNode}
 * @returns {boolean}
 */
module.exports = function checkBalanced(root) {
    function getDepth(root) {
        if (!root || !balanced) { // early exit, will not count depth once we know the answer
            return 0;
        }
        const left = getDepth(root.left);
        const right = getDepth(root.right);
        if (Math.abs(left - right) > 1) {
            balanced = false;
        }
        return Math.max(left, right) + 1;
    }

    let balanced = true;
    getDepth(root);
    return balanced;
};
