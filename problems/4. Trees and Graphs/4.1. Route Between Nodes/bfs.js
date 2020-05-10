/*
Breadth first search using queue
For every child in a graph, do the following:
0. enqueue first item
1. dequeue an item
2. if it is visited - continue
2. add node to visited
3. enqueue every child node has
4. repeat while queue has any items left
5. When queue is empty, check next item in the graph.

This is BFS - breadth first seach.
Do it from left node till you find right node. If you find right node, return true.
If you don't find right node starting at left node, repeat the search from right node and looking for left node.

Time complexity: O(2n) = O(n)
Space complexity: O(n)
 */

const Queue = require('../../../helpers/queue');

module.exports = function routeBetweenNodes(graph, left, right) {
    function bfs(start, finish) {
        const visited = new Set();
        const queue = new Queue();
        queue.enqueue(start);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if (node === finish) {
                return true;
            }
            if (visited.has(node)) {
                continue;
            }
            visited.add(node);
            for (let child of node.children) {
                queue.enqueue(child);
            }
        }

        return false;
    }

    let leftNode, rightNode;
    for (let node of graph) {
        if (node.val === left) {
            leftNode = node;
        }
        if (node.val === right) {
            rightNode = node;
        }
    }

    // we have a directed graph, so we have to try to find path from A to B, as well as from B to A
    return bfs(leftNode, rightNode) || bfs(rightNode, leftNode);
};