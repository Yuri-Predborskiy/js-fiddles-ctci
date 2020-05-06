/*
Solution using two runners approach in a doubly-linked list.
Iterate from both ends simultaneously, finish as soon as pointers touch or pass by each other

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * @param {DoublyLinkedList} list
 * @return {boolean}
 */
module.exports = function palindrome(list) {
    let left = list.head, right = list.tail, last = null;
    while (left && left !== right && last !== right) {
        if (left.val !== right.val) {
            return false;
        }
        last = left;
        left = left.next;
        right = right.prev;
    }
    return true;
};
