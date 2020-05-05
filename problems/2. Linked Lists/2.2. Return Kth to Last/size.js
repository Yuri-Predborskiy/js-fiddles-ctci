/*
Iterate over the list once and write down its length.
Iterate over the list again and stop at desired node, which is length - n

Limitations: n <= list length

Time complexity: O(n), two passes
Space complexity: O(1)
 */

/**
 * @param {LinkedList} list
 * @param {number} k
 * @return {LinkedList}
 */
module.exports = function returnKthToLast(list, k) {
    let finish = -k, node = list.head, i = 0;

    while (node) {
        finish++;
        node = node.next;
    }

    node = list.head;
    while (node && i < finish) {
        node = node.next;
        i++;
    }

    return node.val;
};
