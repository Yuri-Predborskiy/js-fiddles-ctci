/*
Deleting node in the middle of a singly linked list without having access to previous node
Replace node value with next node's value
Replace next with next's next
Basically, replace this node with next node, and delete next node

Writing test is a bigger challenge, as I had to add a wrapper function

Time complexity: O(1)
Space complexity: O(1)
 */

/**
 * @param {ListNode} node
 * @return {void}
 */
function deleteMiddleNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

/**
 * Wrapper function for deleteMiddleNode. Accepts list, executes deleteMiddleNode on desired node, returns list
 * @param list {LinkedList}     Linked List where we'll need to delete a node
 * @param k {number}            Node index which should be deleted
 * @return {LinkedList}
 */
module.exports = function wrapper(list, k) {
    let node = list.head, counter = 1;
    while (node && counter++ < k) {
        node = node.next;
    }

    deleteMiddleNode(node);

    return list;
};
