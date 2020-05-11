/*
BST stands for binary search tree
Binary tree has two children at most: left and right
Binary Search tree has an extra condition:
All left sub tree values should be smaller than root. This applies to every sub-tree
All right sub-tree values should be larger than root. This applies to every sub-tree

So we simply walk through the tree and check if every node fits into these limitations

Time complexity: O(n)
Space complexity: O(1), outside of recursion stack
 */

/**
 * Return value of next node in in-order traversal (left, root, right)
 * @param root {TreeNode}
 * @returns {boolean}
 */
module.exports = function validateBST(root) {
    function isValid(root, min, max) {
        if (!root) {
            return true;
        }
        if (root.val > max || root.val < min) {
            return false;
        }
        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }

    return isValid(root, -Infinity, Infinity);
};
