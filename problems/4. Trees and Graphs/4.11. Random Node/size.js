/*
Implement a binary search tree with "get random node" function
Random node is found by traversing the tree, looking for a specific node in node lengths
If random is less than left node length, look for it in the left sub-tree
If random number = left node length, return root
Else, look for number in the right sub-tree. Decrement random number by number of nodes in the left sub-tree

Insert:
when inserting, you traverse the tree
when traversing for insert, increment node size as you go
alternatively, only increment as you exit recursion if insert was a success

Time complexity:
insert: O(logN) best case, O(n) worst case
find: O(logN) best case, O(n) worst case
getRandom: O(logN)
delete: O(logN) best case, O(n) worst case
Extra space for random node: constant extra space per node for "get random" feature, O(n) space total
 */

const Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.size = 1;
};

const BinarySearchTreeWithRandom = function() {
    this.root = null;
};

// insert x
// find x
// delete
// get random

/**
 * Insert a new value into the BST
 * @param val {*}       value to be inserted. Duplicate values are not allowed
 * @returns {boolean}   success, returns false if value already exists
 */
BinarySearchTreeWithRandom.prototype.insert = function(val) {
    let node = this.root;
    if (!node) {
        this.root = new Node(val);
        return true;
    }
    const stack = []; // to increment sizes
    while (node) {
        stack.push(node);
        if (val < node.val) {
            if (node.left) {
                node = node.left;
            } else {
                node.left = new Node(val);
                break;
            }
        } else if (val > node.val) {
            if (node.right) {
                node = node.right;
            } else {
                node.right = new Node(val);
                break;
            }
        } else { // val === node.val
            return false; // duplicates are not allowed
        }
    }
    // node was created and inserted, update all parents and increment their size
    while (stack.length > 0) {
        node = stack.pop();
        node.size++;
    }
    return true;
};

BinarySearchTreeWithRandom.prototype.find = function(val) {
    let node = this.root;
    while (node) {
        if (val === node.val) {
            return true;
        } else if (val < node.val) {
            node = node.left;
        } else /*if (val > node.val)*/ {
            node = node.right;
        }
    }
    return false;
};

/**
 * Delete node in binary search tree.
 * @return {void}
 */
BinarySearchTreeWithRandom.prototype.delete = function(val) {
    let node = this.root;
    if (node.size === 1) {
        this.root = null;
    }
    let donorNode, donorParent;
    const stack = []; // to decrement sizes
    while (node) {
        stack.push(node);
        if (val === node.val) {
            const parentNode = stack[stack.length - 2];
            let successorNode = null;
            if (node.right) {
                donorNode = node.right;
                donorParent = node;
                if (donorNode.left) {
                    while (donorNode.left) {
                        stack.push(donorNode);
                        donorParent = donorNode;
                        donorNode = donorNode.left;
                    }
                    donorParent.left = donorNode.right;
                } else {
                    donorParent.right = donorNode.right;
                }
                break; // node is deleted, we only need to update node value now
            } else if (node.left) {
                successorNode = node.left;
            }
            if (!parentNode) {
                this.root = successorNode;
            } else if (parentNode.left === node) {
                parentNode.left = successorNode;
            } else {
                parentNode.right = successorNode;
            }
            break;
        } else if (val < node.val) {
            node = node.left;
        } else /*if (val > node.val)*/ {
            node = node.right;
        }
    }

    if (donorNode) {
        node.val = donorNode.val;

    }
    while (stack.length > 0) {
        node = stack.pop();
        node.size--;
    }

    console.log();
};

BinarySearchTreeWithRandom.prototype.getRandom = function() {
    // get random node
    let node = this.root;
    if (!node) {
        return null;
    }

    let randomNumber = getRandomNumber(node.size);
    while (node) {
        let leftSize = node.left ? node.left.size : 0;
        if (randomNumber === leftSize + 1) {
            return node.val;
        } else if (randomNumber <= leftSize) {
            node = node.left;
        } else {
            node = node.right;
            randomNumber -= leftSize + 1;
        }
    }
};

/**
 * Get random number from 1 to MAX
 * @param max {number}
 * @return {number}
 */
function getRandomNumber(max) {
    if (predefinedRandomNumbers.length > 0) {
        const rand = predefinedRandomNumbers[predefinedRandomIndex];
        predefinedRandomIndex++;
        if (predefinedRandomIndex === predefinedRandomNumbers.length) {
            predefinedRandomIndex = 0;
        }
        return rand;
    }
    return Math.floor(Math.random() * max) + 1;
}

let predefinedRandomNumbers = [];
let predefinedRandomIndex = 0;

module.exports = function wrapper(operations, randomNumbers) {
    if (randomNumbers) {
        predefinedRandomNumbers = randomNumbers;
    }
    const tree = new BinarySearchTreeWithRandom(), results = [[]];
    for (let [op, value] of operations) {
        const result = tree[op](value);
        results[0].push(result);
    }

    results[1] = levelOrder(tree.root);

    return results;
};

/**
 * Level order traversal for tree visualisation
 * @param root
 * @returns {[]}
 */
function levelOrder(root) {
    const output = [];
    if (!root) {
        return output;
    }
    let level = [root];
    while (level.length > 0) {
        const children = [];
        const values = [];
        for (const node of level) {
            if (node.left) {
                children.push(node.left);
            }
            if (node.right) {
                children.push(node.right);
            }
            values.push({val: node.val, size: node.size});
        }
        level = children;
        output.push(values);
    }
    return output;
}
