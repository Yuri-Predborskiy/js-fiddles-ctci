/*
Calculate all permutations of a string that may contain duplicates
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
module.exports = function permutationsWithDups(string) {
    function createStringFromList(list) {
        let node = list.getAtHead();
        let res = [];
        while (node) {
            res.push(node.val);
            node = node.next;
        }
        return res.join('');
    }

    if (string.length < 1) {
        return [];
    }

    const list = new LinkedList();
    for (const char of string) {
        list.appendAtTail(char);
    }
    const stack = [[list, new LinkedList()]];
    const resultSet = new Set();

    while (stack.length > 0) {
        let [remainingChars, charList] = stack.pop();
        if (remainingChars.size === 0) {
            const string = createStringFromList(charList);
            resultSet.add(string);
            continue;
        }

        let remainingCharNode = remainingChars.getAtHead();
        while (remainingCharNode) {
            const remainingCharsWithoutCurrentCharList = remainingChars.clone(remainingCharNode);
            const charListClone = charList.clone();
            charListClone.appendAtTail(remainingCharNode.val);
            stack.push([remainingCharsWithoutCurrentCharList, charListClone]);
            remainingCharNode = remainingCharNode.next;
        }
    }

    return new Array(...resultSet.values());
};