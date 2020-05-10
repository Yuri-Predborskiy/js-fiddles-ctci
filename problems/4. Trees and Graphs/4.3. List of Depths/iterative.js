/*
Convert a binary tree to a list of lists
For each level of tree, create a list of tree nodes (copy values from tree nodes to list nodes)

Time complexity: O(n), where n = number of nodes in the tree
Space complexity: O(m), where m = largest level of the tree (less than n)
We could improve space complexity by iterating over list nodes, if list nodes were also tree nodes.
    This would make queue unnecessary. But that would just be weird.

This solution could be improved if we collected tree levels into arrays
It would be easier to remove nulls at the end of array
 */

const ListNode = require('../../../helpers/list-node');
const LinkedList = require('../../../helpers/linked-list-pure');
const Queue = require('../../../helpers/queue');

/**
 * Create a list of lists, each sub-list contains all the nodes of a binary tree
 * @param root {TreeNode}
 * @returns {LinkedList}
 */
module.exports = function listOfDepths(root) {
    const result = new LinkedList();
    let level, nextLevel = new Queue();
    nextLevel.enqueue(root);
    while (!nextLevel.isEmpty()) {
        level = nextLevel;
        nextLevel = new Queue();
        const list = new LinkedList();
        while (!level.isEmpty()) {
            const node = level.dequeue();
            const listNode = new ListNode(node !== null ? node.val : null);
            list.appendAtTail(listNode);
            if (node) {
                nextLevel.enqueue(node.left);
                nextLevel.enqueue(node.right);
            }
        }
        if (!list.isEmpty()) {
            result.appendAtTail(new ListNode(list));
        }
    }
    return result;
};
