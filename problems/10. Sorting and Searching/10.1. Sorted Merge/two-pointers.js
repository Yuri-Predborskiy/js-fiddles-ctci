/*
Merge two sorted arrays, A and B. A has enough buffer space for all elements from B. Return A with elements from B

Algorithm:
Starting from the end of the A, define 3 pointers:
    A insert index - where last item is inserted
    B end - current last non-inserted element in B
    A end - current last non-inserted element in A
Compare last A and last B, insert larger one into the A insert index
Repeat comparison till all elements of B are inserted. Remaining A elements are already in place

Time complexity: O(n) where n is number of elements in A after merge (number of initialized elements in A and B)
Space complexity: O(1) constant space since we're updating one of the inputs
 */

/**
 * Merge sorted array B into sorted array A which has enough space to fit all elements from B
 * @param target {[]}       target array (A) which will have all elements
 * @param extraData {[]}    extra elements container which will be inserted into target
 * @returns {[]}            pointer to target array
 */
module.exports = function sortedMerge(target, extraData) {
    let lastIndexInTarget;
    for (let i = target.length - 1; i >= -1; i--) {
        if (typeof target[i] !== 'undefined' || i === -1) {
            lastIndexInTarget = i;
            break;
        }
    }

    let insertIndex = lastIndexInTarget + extraData.length;
    let lastIndexInExtra = extraData.length - 1;

    while (lastIndexInExtra >= 0) {
        if (target[lastIndexInTarget] > extraData[lastIndexInExtra]) {
            target[insertIndex] = target[lastIndexInTarget];
            lastIndexInTarget--;
        } else {
            target[insertIndex] = extraData[lastIndexInExtra];
            lastIndexInExtra--;
        }
        insertIndex--;
    }

    return target;
};