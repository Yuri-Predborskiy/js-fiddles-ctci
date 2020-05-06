const LinkedList = require('../../../helpers/linked-list');
/*
Solution using two runners approach.
Take one node from both lists and sum them with remainder (0 by default)
If the number is larger than 10, set remainder to 1, the rest goes into the node
If there is a remainder after we've processed all nodes, add a node and put remainder there

Time complexity: O(n)
Space complexity: O(n) if we create a new list, O(1) if we update existing an existing list
 */

/**
 * @param {LinkedList} leftList     Linked list that will be partitioned
 * @param {LinkedList} rightList    Linked list that will be partitioned
 * @return {LinkedList}
 */
module.exports = function sumLists(leftList, rightList) {
    let left = leftList.head, right = rightList.head, remainder = 0;
    let list = new LinkedList();
    while (left || right || remainder) {
        const leftVal = left ? left.val : 0;
        const rightVal = right ? right.val : 0;
        const num = leftVal + rightVal + remainder;
        remainder = Math.floor(num / 10);
        list.appendAtTail(num % 10);
        left = left ? left.next : null;
        right = right ? right.next : null;
    }

    return list;
};
