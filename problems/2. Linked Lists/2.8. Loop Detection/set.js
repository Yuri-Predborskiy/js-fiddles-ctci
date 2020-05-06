/*
Add every visited node into a set
If you've seen this node before - this is the start of the loop
If you reached the end, there is no loop

For simplicity, function returns value, not node, of the first looping element

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {LinkedList} list
 * @return {*}
 */
module.exports = function loopDetection(list) {
    const set = new Set();
    let node = list.head;
    while (node) {
        if (set.has(node)) {
            return node.val;
        }
        set.add(node);
        node = node.next;
    }
    return null;
};
