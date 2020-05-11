/*
Find a successor to a tree node in in-order traversal
For the sake of simplicity, return node value instead of node itself
Explanation: in in-order traversal, the next node after current node is right node, followed by its left-most child
If there is no left child, we take root node itself.
Afterwards it would be the right node

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * Return value of next node in in-order traversal (left, root, right)
 * @param root {TreeNode}
 * @returns {LinkedList}
 */
module.exports = function successor(root) {
    let node = root.right;
    if (!node) {
        return node;
    }
    while (node.left) {
        node = node.left;
    }
    return node.val;
};
