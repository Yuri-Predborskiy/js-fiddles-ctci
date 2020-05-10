/*
Convert sorted array (increasing order) into a binary search tree

Time complexity: O(n)
Space complexity: O(1) (no extra space, except for recursion stack)
 */

const TreeNode = require('../../../helpers/tree-node');

/**
 * Create a binary search tree of minimal height given a sorted array of unique integers
 * @param array {number[]}
 * @returns root {TreeNode}
 */
module.exports = function routeBetweenNodes(array) {
    function createTree(start, finish) {
        if (start > finish) {
            return null;
        }
        const middle = Math.ceil((start + finish) / 2);
        const node = new TreeNode(array[middle]);
        node.left = createTree(start, middle - 1);
        node.right = createTree(middle + 1, finish);
        return node;
    }
    const tree = createTree(0, array.length - 1);
    return createTree(0, array.length - 1);
};
