/*
Solution using array. Write all values from the linked list into an array and check if it is palindrome

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {LinkedList} list
 * @return {boolean}
 */
module.exports = function palindrome(list) {
    const values = [];
    let node = list.head;
    while (node) {
        values.push(node.val);
        node = node.next;
    }
    for (let i = 0; i < Math.floor(values.length / 2); i++) {
        if (values[i] !== values[values.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
