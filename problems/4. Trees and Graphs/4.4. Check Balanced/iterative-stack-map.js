/*
If tree is balanced: the difference of depth of left sub-tree and right sub-tree is no more than 1
Solution using iteration via Stack (post-order traversal)
Benefit of iterative approach: early exit as soon as we know the answer (false)
Drawback of iterative approach: harder to implement compared to recursion, extra space complexity

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * Return value of next node in in-order traversal (left, root, right)
 * @param root {TreeNode}
 * @returns {boolean}
 */
module.exports = function checkBalanced(root) {
    if (!root) {
        return true;
    }
    const stack = [root];
    const depthMap = new Map();
    depthMap.set(null, 0);
    while (stack.length) {
        const node = stack.pop();
        if (!depthMap.has(node.left) || !depthMap.has(node.right)) {
            stack.push(node);
            if (!depthMap.has(node.right)) {
                stack.push(node.right);
            }
            if (!depthMap.has(node.left)) {
                stack.push(node.left);
            }
            continue;
        }
        let left = depthMap.get(node.left);
        let right = depthMap.get(node.right);
        if (Math.abs(left - right) > 1) {
            return false;
        }
        depthMap.set(node, Math.max(left, right) + 1)
    }

    return true;
};
