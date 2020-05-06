const LinkedList = require('../../../helpers/linked-list');

/*
Collect all numbers into arrays
Process the numbers, calculate sum
Create a new list and put every number into the new list

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {LinkedList} leftList     Linked list that will be partitioned
 * @param {LinkedList} rightList    Linked list that will be partitioned
 * @return {LinkedList}
 */
module.exports = function sumListsFollowUp(leftList, rightList) {
    let left = leftList.head, right = rightList.head;
    let list = new LinkedList(), remainder = 0;
    const leftNums = [], rightNums = [], totals = [];

    while (left) {
        leftNums.push(left.val);
        left = left.next;
    }
    while (right) {
        rightNums.push(right.val);
        right = right.next;
    }

    for (let i = leftNums.length - 1, j = rightNums.length - 1; i >= 0 || j >= 0 || remainder > 0; i--, j--) {
        const num = (leftNums[i] || 0) + (rightNums[j] || 0) + remainder;
        totals.push(num % 10);
        remainder = Math.floor(num / 10);
    }

    for (let i = totals.length - 1; i >= 0; i--) {
        list.appendAtTail(totals[i]);
    }

    return list;
};
