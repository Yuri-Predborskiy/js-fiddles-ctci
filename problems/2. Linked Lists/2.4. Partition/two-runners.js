/*
Solution using two runners approach.
Slow runner stops at the first node larger than or equal to K
Fast runner stops at the first node smaller smaller than K that is found after the slow runner
Both runners never reset
Exit when fast runner exits the list

Move nodes smaller than K to happen before those equal to or bigger than K
Swap values - b to temp, a to b, temp to a.
Linear time complexity, we process every element once, swapping when necessary
Constant extra space

Optimization:
when doing swap, swap the slow runner with the last known good fast runner (when you find the first invalid runner)

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * @param {LinkedList} list     Linked list that will be partitioned
 * @param {number} k            Number used for partitioning
 * @return {LinkedList}         Change input and return it
 */
module.exports = function partition(list, k) {
    let slow = list.head, fast = list.head.next;
    while (fast) {
        while (slow && slow.val < k) {
            slow = slow.next;
            fast = slow ? slow.next : null;
        }
        while (fast && fast.val >= k) {
            fast = fast.next;
        }
        if (fast) {
            let temp = fast.val;
            fast.val = slow.val;
            slow.val = temp;
        }
    }
    return list;
};
