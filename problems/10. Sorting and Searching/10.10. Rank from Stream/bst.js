/*
Create data structure to keep items that appear in the stream and with a method to tell item's rank
Rank is number of items equal to or smaller than item itself

Use binary search tree to save values. Keep track of leftRank when inserting elements.
Time complexity when inserting or searching in a BST depends on how well the tree is balanced.
For balanced tree both operations have time complexity of O(log(n))
For poorly balanced tree time complexity can be O(n)

Solution inspired by the book solution.

Time complexity:
track - O(log(n)) average, O(n) worst case
getRankOfNumber - O(log(n)) average, O(n) worst case
Space complexity: O(n)
 */

function RankNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.leftRank = 0;
}

function StreamRanker() {
    this.root = null;
}

StreamRanker.prototype.track = function(val) {
    function insertIntoTree(root, val) {
        if (!root) {
            return new RankNode(val);
        }
        if (root.val === val) {
            root.leftRank++;
        } else if (root.val > val) {
            root.leftRank++;
            root.left = insertIntoTree(root.left, val);
        } else {
            root.right = insertIntoTree(root.right, val);
        }
        return root;
    }

    this.root = insertIntoTree(this.root, val);
}

StreamRanker.prototype.getRankOfNumber = function(val) {
    function getRank(root, val) {
        if (!root) {
            return -1;
        } else if (root.val > val) {
            return getRank(root.left, val);
        } else if (root.val === val) {
            return root.leftRank;
        } else if (root.val < val) {
            let rightRank = root.leftRank + getRank(root.right, val) + 1;
            if (!root.right) {
                rightRank++;
            }
            return rightRank;
        }
    }

    return getRank(this.root, val);
}

/**
 * Search in rotated sorted array of integers
 * @param numberStream {number[]}   Array of integers to push into StreamRanker
 * @param rankStream {number[]}     Array of integers to get rank of
 * @returns {number[]}              ranks of rankStream items in the same order
 */
module.exports = function wrapper(numberStream, rankStream) {
    const ranker = new StreamRanker();
    numberStream.map(number => ranker.track(number));
    return rankStream.map(number => ranker.getRankOfNumber(number));
}
