const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

const {
    convertAdjacencyMatrixToGraph,
    convertBinaryTreeToArray,
    convertArrayToBinaryTree,
    convertLinkedListToArray,
} = require('../../helpers/converters');

describe('Chapter 4. Trees and Graphs', () => {
    describe('Problem 4.1. Route Between Nodes', () => {
        const adjacencyMatrix = [
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ];
        const tests = [
            {input: [adjacencyMatrix, 0, 2], output: true}, // path from 0 to 2 exists
            {input: [adjacencyMatrix, 1, 3], output: true}, // path from 1 to 3 does not exist, 3 to 1 exists
            {input: [adjacencyMatrix, 2, 4], output: false}, // node 4 is isolated
        ];
        const options = {
            processInput: input => [convertAdjacencyMatrixToGraph(input[0]), input[1], input[2]],
        };

        describe('bfs, Check if path exists using Breadth First Search', () => {
            const solver = require('./4.1. Route Between Nodes/bfs');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.2. Minimal Tree', () => {
        const tests = [
            {input: [[1, 2, 3, 4]], output: [3, 2, 4, 1]},
            {input: [[1]], output: [1]},
            {input: [[1, 2, 3]], output: [2, 1, 3]},
            {input: [[1, 2, 3, 4, 5, 6, 7]], output: [4, 2, 6, 1, 3, 5, 7]},
        ];
        const options = {
            processOutput: output => convertBinaryTreeToArray(output),
            compareType: assertTypes.deepEqual
        };

        describe('recursion, Break array in the middle and create root, left and right trees recursively', () => {
            const solver = require('./4.2. Minimal Tree/recursion');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.3. List of Depths', () => {
        const tests = [
            {input: [1, 2, 3], output: [[1], [2, 3], [null, null, null, null]]},
            {input: [1, 2, 3, 4, null, null, 5], output: [[1], [2, 3], [4, null, null, 5], [null, null, null, null]]},
            {
                input: [1, 2, 3, 4, 5, 6, 7],
                output: [[1], [2, 3], [4, 5, 6, 7], [null, null, null, null, null, null, null, null]]
            },
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input)],
            processOutput: output => {
                let node = output.head;
                const result = [];
                while (node) {
                    result.push(convertLinkedListToArray(node.val));
                    node = node.next;
                }
                return result;
            },
            compareType: assertTypes.deepEqual
        };

        describe('iterative, Using level order traversal via queue, create level lists from all tree nodes', () => {
            const solver = require('./4.3. List of Depths/iterative');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.4. Check Balanced', () => {
        const tests = [
            {input: [1, 2, 3], output: true},
            {input: [1, 2, 3, 4], output: true},
            {input: [1, 2, null, 3], output: false},
            {input: [1, 2, 3, 4, null, null, null, 5], output: false},
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input)],
        };

        describe('recursion, Recursively go over the tree and check if all sub-trees are balanced', () => {
            const solver = require('./4.4. Check Balanced/recursion');
            testRunner(tests, solver, options);
        });

        describe('iterative-stack-map, Iteratively go over the tree and check if all sub-trees are balanced', () => {
            const solver = require('./4.4. Check Balanced/iterative-stack-map');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.5. Validate BST', () => {
        const tests = [
            {input: [1, 2, 3], output: false},
            {input: [2, 1, 3], output: true},
            {input: [3, 2, 4, 1], output: true},
            {input: [1], output: true},
            {input: [4, 2, 6, 1, 3, 7, 5], output: false},
            {input: [4, 2, 6, 1, 3, 5, 7], output: true},
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input)],
        };

        describe('recursion, Walk over the tree and check if every node fits into limitations of BST', () => {
            const solver = require('./4.5. Validate BST/recursion');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.6. Successor', () => {
        const tests = [
            {input: [1, 2, 3], output: 3},
            {input: [1, 2, 3, 4, null, 5], output: 5},
            {input: [1, 2, 3, 4, null, null, 5], output: 3},
            {input: [1, 2], output: null},
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input)],
        };

        describe('iterative, Iterate over the nodes to find a successor', () => {
            const solver = require('./4.6. Successor/iterative');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.7. Build Order', () => {
        const tests = [
            {
                input: [
                    ['a', 'b', 'c', 'd', 'e', 'f'],
                    [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']],
                ],
                output: ['e', 'f', 'b', 'a', 'd', 'c']
            },
            {
                input: [
                    ['c', 'd'],
                    [['d', 'c'], ['c', 'd']],
                ],
                output: ['error'] // for the sake of test simplicity
            },
            {
                input: [
                    ['a', 'b', 'c', 'd'],
                    [['b', 'a'], ['c', 'b'], ['a', 'c'], ['a', 'd']],
                ],
                output: ['error'] // for the sake of test simplicity
            },
            {
                input: [
                    ['a', 'b', 'c'],
                    [['a', 'b']],
                ],
                output: ['b', 'c', 'a']
            },
            {
                input: [
                    ['a'],
                    [],
                ],
                output: ['a']
            },
            {
                input: [
                    [],
                    [],
                ],
                output: []
            },
        ];
        const options = {
            processOutput: output => output instanceof Error ? ['error'] : output,
            compareType: assertTypes.deepEqual, // beware: order-dependent
        };

        describe('iterative, Iterate over the nodes to find a successor', () => {
            const solver = require('./4.7. Build Order/bfs');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.8. First Common Ancestor', () => {
        const tests = [
            {input: [[1, 2, 3], 2, 3], output: 1},
            {
                input: [['a', 'b', 'c', 'd', 'e', 'f', 'g', null, null, 'j', null, 'k', null, 'h', 'i'], 'f', 'g'],
                output: 'c'
            },
            {
                input: [['a', 'b', 'c', 'd', 'e', 'f', 'g', null, null, 'j', null, 'k', null, 'h', 'i'], 'f', 'z'],
                output: null
            },
            {
                input: [['a', 'b', 'c', 'd', 'e', 'f', 'g', null, null, 'j', null, 'k', null, 'h', 'i'], 'i', 'j'],
                output: 'a'
            },
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input[0]), input[1], input[2]],
        };

        describe('iterative, Iterate over the nodes to find a successor', () => {
            const solver = require('./4.8. First Common Ancestor/dfs');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.9. BST Sequences', () => {
        const tests = [
            {
                input: [2, 1, 3],
                output: [[2, 1, 3], [2, 3, 1]]
            },
            {
                input:
                    [4, 2, 6, 1, 3],
                output: [
                    [4, 2, 1, 3, 6],
                    [4, 2, 1, 6, 3],
                    [4, 2, 6, 1, 3],
                    [4, 6, 2, 1, 3],
                    [4, 2, 3, 1, 6],
                    [4, 2, 3, 6, 1],
                    [4, 2, 6, 3, 1],
                    [4, 6, 2, 3, 1],
                ]
            },
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input)],
            processOutput: output => output.map(a => convertLinkedListToArray(a)),
            compareType: assertTypes.deepEqual,
        };

        describe('double-recursion, Textbook solution, converted into JS', () => {
            const solver = require('./4.9. BST Sequences/double-recursion');
            testRunner(tests, solver, options);
        });
    });


    describe('Problem 4.10. Check Subtree', () => {
        const tests = [
            {input: [[4, 2, 6, 1, 3, 5, 7], [2, 1, 3]], output: true},
            {input: [[4, 2, 6, 1, 3], [2, 3, 1]], output: false},
            {input: [[1, 2, null, null, 4], [2, 4]], output: false},
            {input: [[1, 2, null, 4], [2, 4]], output: true},
            {input: [[1, 2, null, 4], [4]], output: true},
            {input: [[1, 1, 1, 1, 1, 1, 1], [1, 1]], output: false},
            {input: [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1]], output: true},
        ];
        const options = {
            processInput: input => input.map(arr => convertArrayToBinaryTree(arr)),
        };

        describe('serialize, Serialize trees and compare results', () => {
            const solver = require('./4.10. Check Subtree/serialize');
            testRunner(tests, solver, options);
        });

        describe('recursive, Recursively find matching roots and compares sub-trees', () => {
            const solver = require('./4.10. Check Subtree/recursive');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.11. Random Node', () => {
        const tests = [
            {
                input: [[
                    // operation array: [operation[, value]]
                    ['insert', 5],
                    ['insert', 5],
                    ['insert', 10],
                    ['insert', 8],
                    ['insert', 6],
                    ['insert', 7],
                    ['find', 5],
                    ['delete', 5],
                    ['find', 5],
                    ['find', 6],
                    // ['getRandom'] // warning: uncommenting this line will make the test fail
                ]],
                output: [
                    [true, false, true, true, true, true, true, undefined, false, true],
                    [[
                        {"size": 4, "val": 6}
                    ], [
                        {"size": 3, "val": 10}
                    ], [
                        {"size": 2, "val": 8}
                    ], [
                        {"size": 1, "val": 7}
                    ]]
                ]
            },
            {
                input: [[
                    // operation array: [operation[, value]]
                    ['insert', 5],
                    ['insert', 3],
                    ['insert', 2],
                    ['delete', 5],
                    ['find', 5],
                    ['find', 3],
                    // ['getRandom']
                ]],
                output: [
                    [true, true, true, undefined, false, true],
                    [[
                        {"size": 2, "val": 3}
                    ], [
                        {"size": 1, "val": 2}
                    ]]
                ]
            },
            {
                input: [[
                    // operation array: [operation[, value]]
                    ['insert', 5],
                    ['insert', 3],
                    ['insert', 2],
                    ['insert', 6],
                    ['insert', 4],
                    ['delete', 3],
                    ['find', 5],
                    ['find', 3],
                    ['getRandom'], // random numbers are pre-defined here thanks to special function and special params
                    ['getRandom'], // if randoms are not sent as pre-defined array, random numbers will be picked
                    ['getRandom'], // true random numbers will fail tests
                    ['getRandom']
                ], [1,2,3,4]],
                output: [
                    [true, true, true, true, true, undefined, true, false, 2, 4, 5, 6],
                    [[
                        {"size": 4, "val": 5}
                    ],
                    [
                        {"size": 2, "val": 4},
                        {"size": 1, "val": 6}
                    ],
                    [
                        {"size": 1, "val": 2}
                    ]]
                ]
            },
        ];
        const options = {
            // processInput: input => [convertArrayToBinaryTree(input[0]), input[1]],
            compareType: assertTypes.deepEqual,
        };

        describe('recursive-hash, Textbook solution', () => {
            const solver = require('./4.11. Random Node/size');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.12. Paths with Sum', () => {
        const tests = [
            {input: [[10, 5, -3, 3, 1, null, 11, 3, -2, null, 2], 8], output: 3},
            {input: [[9, 6, -3, 2, 1, null, 11, 3, -2, null, 1], 8], output: 3},
        ];
        const options = {
            processInput: input => [convertArrayToBinaryTree(input[0]), input[1]],
        };

        describe('recursive-hash, Textbook solution', () => {
            const solver = require('./4.12. Paths with Sum/recursive-hash');
            testRunner(tests, solver, options);
        });
        describe('iterative-map, Iterative solution using stack via array and visited Set, Map of running sums', () => {
            const solver = require('./4.12. Paths with Sum/iterative-map');
            testRunner(tests, solver, options);
        });
    });
});
