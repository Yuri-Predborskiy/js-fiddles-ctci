/*
Find all possible variants of arrays used to create a binary search tree
Solution copied from the book and implemented in JS.
Linked list class enriched with methods required to implement this solution: clone and appendListAtTail

Time complexity: O(2^n)
Space complexity: O(n)
 */

const ListNode = require('../../../helpers/list-node');
const LinkedList = require('../../../helpers/linked-list-pure');

/**
 * Find all arrays that could've been used to create a BST
 * @param root {TreeNode}   tree root
 * @returns {[[*]]}         array of arrays
 */
module.exports = function bstSequences(root) {
    /**
     * Combine lists together in all possible permutations
     * @param first {LinkedList}
     * @param second {LinkedList}
     * @param results {[]}
     * @param prefix {LinkedList}
     */
    function weaveLists(first, second, results, prefix) {
        if (first.isEmpty() || second.isEmpty()) {
            const result = prefix.clone();
            result.appendListAtTail(first);
            result.appendListAtTail(second);
            results.push(result);
            return;
        }

        const headFirst = first.popAtHead();
        prefix.appendAtTail(headFirst);
        weaveLists(first, second, results, prefix);
        prefix.popAtTail();
        first.appendAtHead(headFirst);

        const headSecond = second.popAtHead();
        prefix.appendAtTail(headSecond);
        weaveLists(first, second, results, prefix);
        prefix.popAtTail();
        second.appendAtHead(headSecond);
    }

    function allSequences(root) {
        const result = [];

        if (!root) {
            result.push(new LinkedList());
            return result;
        }

        const prefix = new LinkedList();
        prefix.appendAtHead(new ListNode(root.val));

        const leftSeq = allSequences(root.left);
        const rightSeq = allSequences(root.right);

        for (const left of leftSeq) {
            for (const right of rightSeq) {
                const weaved = [];
                weaveLists(left, right, weaved, prefix);
                result.push(...weaved);
            }
        }

        return result;
    }

    return allSequences(root);
};
