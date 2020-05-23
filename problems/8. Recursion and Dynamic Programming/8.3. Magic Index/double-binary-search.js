/*
Double binary search
Since input is sorted, we can use binary search to find desired value
Since input may contain duplicates, we cannot guarantee search direction, but it makes sense to use binary search twice
First time we search in original direction of B.S.
Second time we search in the opposite direction, up to middle or value in the middle
We also skip searching among negative values as array index cannot be negative

Implemented iteratively using stack, alternatively we could use a recursion for each binary search step

Time complexity: O(log(n))
Space complexity: O(log(n)) for stack, very approximate
 */

/**
 * Find magic index where array[i] = i
 * @param numbers {number[]}    Input array
 * @returns {number|null}
 */
module.exports = function magicIndex(numbers) {
    if (!numbers || numbers.length === 0) {
        return null;
    }

    const stack = [[0, numbers.length - 1]];

    while (stack.length > 0) {
        const [left, right] = stack.pop();
        if (left > right) {
            continue;
        }
        const mid = Math.floor((left + right) / 2);
        if (numbers[mid] === mid) {
            return mid;
        }
        if (numbers[mid] < mid) {
            // if value is negative, skip left side entirely, magic index cannot be < 0
            if (numbers[mid] >= 0) {
                // if there are duplicates, we should look in both directions, left-side example [-1,1,1,1,1]
                stack.push([left, Math.min(numbers[mid], mid - 1)]);
            }
            // if there are no duplicates, magic index can be only to the right
            stack.push([mid + 1, right]);
        }
        if (numbers[mid] > mid) {
            // if there are duplicates, we should search in both directions, right-side example: [3,3,3,3]
            stack.push([Math.max(numbers[mid], mid + 1), right]);
            // if there are no duplicates, magic index can only be to the left - only bigger values to the right
            stack.push([left, mid - 1]);
        }
    }

    return null;
};