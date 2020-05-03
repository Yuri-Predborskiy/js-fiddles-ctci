/*
Iterate over the list. Save every value to a Set. If value is already in the set, remove it.

Time complexity: O(n), single pass
Space complexity: O(n), may require a full copy of the list
 */

/**
 * @param {LinkedList} list
 * @return {LinkedList}
 */
module.exports = function removeDups(list) {
    let set = new Set();
    let node = list.head;

    while (node) {
        if (set.has(node.val)) {
            list.delete(node);
        } else {
            set.add(node.val);
        }
        node = node.next;
    }

    return list;
};
