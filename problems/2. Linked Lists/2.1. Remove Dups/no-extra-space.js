/*
Iterate over linked list, starting with each node. Two runners approach
One (slow) points at original node.
Second (fast) moves forward one node at a time
If fast node value is the same as slow node value, delete that node (set prev to prev.next)

This solution is slow but does not require extra memory

Time complexity: O(n^2)
Space complexity: O(1)
 */

/**
 * @param {LinkedList} list
 * @return {LinkedList}
 */
module.exports = function removeDups(list) {
    if (!list.head) {
        return list;
    }
    let slow = list.head;
    let fast = slow.next;
    let last = slow;

    while (slow) {
        while (fast) {
            if (fast.val === slow.val) {
                last.next = fast.next;
            } else {
                last = fast;
            }
            fast = fast.next;
        }
        slow = slow.next;
        if (slow) {
            fast = slow.next;
            last = slow;
        }
    }

    return list;
};
