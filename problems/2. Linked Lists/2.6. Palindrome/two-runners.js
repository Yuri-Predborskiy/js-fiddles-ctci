/*
Solution using two runners approach in a doubly-linked list.
Iterate from both ends simultaneously, finish as soon as pointers touch or pass by each other

Time complexity: O(n)
Space complexity: O(1)
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
