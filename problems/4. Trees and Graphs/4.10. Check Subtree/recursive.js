/*
Find root of sub-tree in main tree and compare all nodes in main tree and sub-tree from that point

Time complexity: O(n + m) where n and m are lengths of trees
Space complexity: O(n + m)
 */

/**
 * Check if tree A contains tree B as a sub-tree (identical values and structure)
 * @param parent {TreeNode}     Main tree root
 * @param child {TreeNode}      Sub-tree root
 * @returns {boolean}
 */
function checkSubtree(parent, child) {
    function compareTrees(root, otherRoot) {
        if (!root || !otherRoot) {
            // if one root is null, another should be null as well
            return root === otherRoot;
        }
        return root.val === otherRoot.val
            && compareTrees(root.left, otherRoot.left)
            && compareTrees(root.right, otherRoot.right);
    }

    if (!parent) {
        return false;
    }

    if (parent.val === child.val) {
        const sameTree = compareTrees(parent, child);
        if (sameTree) {
            return true;
        }
    }

    return checkSubtree(parent.left, child) || checkSubtree(parent.right, child);
}

module.exports = checkSubtree;