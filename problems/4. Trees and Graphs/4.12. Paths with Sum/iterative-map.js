/*
Check how many paths can lead from any tree node to any tree node where sum of their elements equals desired number
Implemented using running sum technique
When going down, you will accumulate sum of all visited nodes.
When going deeper, we save the running sum into the Map
To reach target sum at any point, we'd need to see if there was a sum such as if we remove target sum from running sum,
    we'd have that specific number
In other words, if we ignored running sum till some point (did not count), and only counted from that point onwards,
    we'd collect target sum.
example:
target sum is 8,
nodes are 10 -> 5 -> 3
In this case we have a running sum of 18 at the last node, but if we remove target sum from running sum, we have 10
In other words, if we ignored running sum of 10, we'd have 8 now, which is our target sum
So we check if there was a point where we had "10" as a running sum somewhere on this path
And there was one occasion where running sum was 10 (the first node)
So, if we started counting after the 10, we'd have 8 now.
Meaning, we found 1 path to reach target sum.

The benefit of this approach is that we don't have to re-calculate path from a later node (after node 10) to find
    target sum. We check if there was a point where we could've reached this result based on previous recordings.
This significantly decreases time complexity, at the cost of some extra space.

This approach is called dynamic programming.

Iterative solution, without using recursion. Benefits: easier to debug, no chance of recursion stack overflow
Drawback: higher code complexity, need to keep a Set of visited nodes and re-visit every node to remove
    its running sum from the Map of running sums (because we can't use them when going into a different sub-tree)
It is easier to implement using recursion, but it is easier to see what is happening when using iteration

Time complexity: O(n), we have to visit every node once
Space complexity: O(n), worst case with a tree where each node has only 1 child which goes straight down
 */

/**
 * Find all paths that sum up to targetSum and return their count
 * @param root {TreeNode}       Root of the tree
 * @param targetSum {number}    Sum to be found
 * @returns {number}
 */
function pathsWithSum(root, targetSum) {
    const stack = [[root, 0]];
    const visited = new Set();
    let runningSumRepeats = new Map();
    let totalPaths = 0;
    while (stack.length > 0) {
        let [node, runningSum] = stack.pop();
        if (!node) {
            continue;
        }
        if (visited.has(node)) {
            runningSumRepeats.set(runningSum, runningSumRepeats.get(runningSum) - 1);
            continue;
        }
        visited.add(node);

        runningSum += node.val;
        const desiredSum = runningSum - targetSum;
        if (runningSumRepeats.has(desiredSum)) {
            totalPaths += runningSumRepeats.get(desiredSum);
        }
        if (runningSum === targetSum) {
            totalPaths++;
        }

        runningSumRepeats.set(runningSum, (runningSumRepeats.get(runningSum) || 0) + 1);
        stack.push([node, runningSum]);
        stack.push([node.right, runningSum]);
        stack.push([node.left, runningSum]);
    }

    return totalPaths;
}

module.exports = pathsWithSum;