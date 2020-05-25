/*
Calculate all permutations of a string that does not contain duplicates
The problem: need to build all possible orders of items
Solution: create a linked list of remaining elements and a linked list of added elements
Remove items from linked list of remaining items when adding an item to the list of added items
This way we process fewer items at each step and don't rebuild strings over and over

Time and space complexity are not affected (maybe time complexity improves since we don't rebuild string, I'm not sure)

Time complexity: O(n! * n)
Space complexity: O(n!)
 */

const LinkedList = require('../../../helpers/doubly-linked-list');

/**
 * Find all permutations of a string
 * @param string {string}
 * @returns {string[]}
 */
module.exports = function powerSet(string) {
    function createStringFromList(list) {
        let node = list.getAtHead();
        let res = [];
        while (node) {
            res.push(node.val);
            node = node.next;
        }
        return res.join('');
    }

    const results = [];
    if (string.length < 1) {
        return results;
    }

    const list = new LinkedList();
    for (const char of string) {
        list.appendAtTail(char);
    }
    const stack = [[list, new LinkedList()]];

    while (stack.length > 0) {
        let [remainingChars, charList] = stack.pop();
        if (remainingChars.size === 0) {
            results.push(createStringFromList(charList));
            continue;
        }

        let remainingCharNode = remainingChars.getAtHead();
        while (remainingCharNode) {
            const cloneWithoutNode = remainingChars.clone(remainingCharNode);
            const charListClone = charList.clone();
            charListClone.appendAtTail(remainingCharNode.val);
            stack.push([cloneWithoutNode, charListClone]);
            remainingCharNode = remainingCharNode.next;
        }
    }

    return results;
};