const _ = require('lodash');

const LinkedList = require('./linked-list');
const DoublyLinkedList = require('./doubly-linked-list');
const GraphNode = require('./graph-node');
const Queue = require('./queue');
const TreeNode = require('./tree-node');

/**
 * Make a deep clone of input, for example, an array or object. Requires Lodash
 * @param input {*}
 * @returns {*}
 */
function cloneDeep(input) {
    return _.cloneDeep(input);
}

/**
 * Convert array into a linked list
 * @param values {array}
 * @returns {LinkedList}
 */
function convertArrayToLinkedList(values) {
    const list = new LinkedList();
    for (const val of values) {
        list.appendAtTail(val);
    }
    return list;
}

/**
 * Convert array into a linked list
 * @param values {array}
 * @returns {DoublyLinkedList}
 */
function convertArrayToDoublyLinkedList(values) {
    const list = new DoublyLinkedList();
    for (const val of values) {
        list.appendAtTail(val);
    }
    return list;
}

/**
 * Convert linked list into an array
 * @param list {LinkedList}
 * @returns {[]}
 */
function convertLinkedListToArray(list) {
    const array = [];
    let node = list.head;
    while (node) {
        array.push(node.val);
        node = node.next;
    }
    return array;
}

/**
 * Convert adjacency matrix to graph
 * @param matrix
 * @returns {null|[]}
 */
function convertAdjacencyMatrixToGraph(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
        return null;
    }

    const graph = [];
    for (let i = 0; i < matrix.length; i++) {
        graph.push(new GraphNode(i));
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col]) {
                graph[row].children.push(graph[col]);
            }
        }
    }

    return graph;
}

/**
 * Convert a tree to array, level order traversal, iterating over children from left to right
 * @param root
 */
function convertBinaryTreeToArray(root) {
    const queue = new Queue();
    queue.enqueue(root);
    const result = [];
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        if (!node) {
            result.push(null);
            continue;
        }
        result.push(node.val);
        if (node.left) {
            queue.enqueue(node.left);
        }
        if (node.right) {
            queue.enqueue(node.right);
        }
    }

    let last = result[result.length - 1];
    while (!last) {
        if (!result[result.length - 1]) {
            last = result.pop();
        } else {
            break;
        }
    }
    return result;
}

function convertArrayToBinaryTree(array) {
    const root = new TreeNode(array[0]);
    const queue = new Queue();
    let index = 1;
    queue.enqueue(root);
    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        if (index < array.length) {
            node.left = array[index] === null ? null : new TreeNode(array[index]);
            index++;
        }
        if (index < array.length) {
            node.right = array[index] === null ? null : new TreeNode(array[index]);
            index++;
        }
        if (node.left) {
            queue.enqueue(node.left);
        }
        if (node.right) {
            queue.enqueue(node.right);
        }
    }
    return root;
}

module.exports = {
    cloneDeep,
    convertArrayToLinkedList,
    convertArrayToDoublyLinkedList,
    convertLinkedListToArray,
    convertAdjacencyMatrixToGraph,
    convertBinaryTreeToArray,
    convertArrayToBinaryTree,
};
