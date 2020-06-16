/*
Create data structure to keep items that appear in the stream and with a method to tell item's rank
Rank is number of items equal to or smaller than item itself

This is a "naive" approach to solve this problem
Keep every number in an array. To get rank - count all numbers smaller than or equal to number we want to find
Keep track of "number exists" flag. If number does not exist, return -1.

Time complexity:
track - O(1)
getRankOfNumber - O(n)
Space complexity: O(n)
 */

function StreamRanker() {
    this.data = [];
}

StreamRanker.prototype.track = function(val) {
    this.data.push(val);
}

StreamRanker.prototype.getRankOfNumber = function(val) {
    let isValFound = false;
    let count = 0;
    for (let item of this.data) {
        if (item > val) {
            continue;
        }
        if (!isValFound && item === val) {
            isValFound = true;
            continue;
        }
        count++;
    }

    if (isValFound) {
        return count;
    }
    return count === 0 ? -1 : count;
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
