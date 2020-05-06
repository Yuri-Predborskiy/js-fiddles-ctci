/*
Two runners, fast and slow
Fast moves at 2 nodes per iteration, slow moves at 1 node per iteration
If they meet at some point, there is a loop
If fast reaches end, there is no loop
To find the loop, starting at intersection, restart fast loop and move them at the same speed (1 node at a time)
When they meet again - we have an intersection

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * @param {LinkedList} list
 * @return {*}
 */
module.exports = function loopDetection(list) {
    let slow = list.head, fast = list.head;
    do {
        fast = fast ? fast.next : fast;
        fast = fast ? fast.next : fast;
        if (!fast) {
            return null;
        }
        slow = slow.next;
    } while (fast && fast !== slow);

    fast = list.head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return fast.val;
};
