/*
Singly-linked list
Using two runners, have 2nd runner run n nodes behind first
Second runner will be at the desired node when first one reaches the end

Limitations: n <= list length

Time complexity: O(n), single pass
Space complexity: O(1)
 */

/**
 * @param {LinkedList} list
 * @param {number} k
 * @return {LinkedList}
 */
module.exports = function returnKthToLast(list, k) {
    let fast = list.head;
    let slow = fast;
    let counter = 0;

    while (fast) {
        while (counter++ < k) {
            fast = fast.next;
        }
        fast = fast.next;
        slow = slow.next;
    }

    return slow.val;
};
