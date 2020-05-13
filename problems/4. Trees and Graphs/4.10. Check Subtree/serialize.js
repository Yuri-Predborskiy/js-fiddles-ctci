/*
Convert both trees to string/array (serialize) and compare results (bigger should include smaller)
Pre-order traversal, save null pointers as #

Time complexity: O(n + m) where n and m are lengths of trees
Space complexity: O(n + m)
 */

/**
 * Check if tree A contains tree B as a sub-tree (identical values and structure)
 * @param parent {TreeNode}     Main tree root
 * @param child {TreeNode}      Sub-tree root
 * @returns {boolean}
 */
module.exports = function checkSubtree(parent, child) {
    function serialize(root, values = []) {
        if (!root) {
            return values.push('#');
        }
        values.push(root.val);
        serialize(root.left, values);
        serialize(root.right, values);
        return values;
    }

    const serializedParent = serialize(parent).join('');
    const serializedChild = serialize(child).join('');
    return serializedParent.includes(serializedChild);
};
