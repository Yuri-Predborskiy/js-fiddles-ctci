/*
Save all nodes of one list into a set.
Check if any nodes of the second list are in a set.

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {LinkedList} left
 * @param {LinkedList} right
 * @return {boolean}
 */
module.exports = function intersection(left, right) {
    const set = new Set();
    let leftNode = left.head, rightNode = right.head;
    while (leftNode) {
        set.add(leftNode);
        leftNode = leftNode.next;
    }
    while (rightNode) {
        if (set.has(rightNode)) {
            return true;
        }
        rightNode = rightNode.next;
    }
    return false;
};
