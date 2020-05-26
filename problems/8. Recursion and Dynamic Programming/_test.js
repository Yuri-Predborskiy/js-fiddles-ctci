const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

// const {
//     convertAdjacencyMatrixToGraph,
//     convertBinaryTreeToArray,
//     convertArrayToBinaryTree,
//     convertLinkedListToArray,
// } = require('../../helpers/converters');

describe('Chapter 8. Recursion and Dynamic Programming', () => {
    describe('Problem 8.1. Triple Step', () => {
        const tests = [
            {input: [0], output: 1},
            {input: [1], output: 1},
            {input: [2], output: 2},
            {input: [3], output: 4},
            {input: [4], output: 7},
            {input: [5], output: 13},
        ];

        describe('dp-iterative, Count paths to each point in dp table and sum reachable positions', () => {
            const solver = require('./8.1. Triple Step/dp-iterative');
            testRunner(tests, solver);
        });
    });

    describe('Problem 8.2. Robot in a Grid', () => {
        const tests = [
            {input: [[[1,1], [1,1]]], output: '0:0,1:0,1:1'},
            {input: [[[1,0], [1,1]]], output: '0:0,1:0,1:1'},
            {input: [[[1,1], [0,1]]], output: '0:0,0:1,1:1'},
            {input: [[[1,0], [0,1]]], output: ''},
            {
                input: [[
                    [1,1,1],
                    [1,0,1],
                    [1,1,1]
                ]],
                output: '0:0,1:0,2:0,2:1,2:2' // go down, go right
            },
            {
                input: [[
                    [1,1,1],
                    [1,0,1],
                    [1,0,1]
                ]],
                output: '0:0,0:1,0:2,1:2,2:2' // go right, go down
            },
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('dfs, Find a path using DFS and return nodes visited', () => {
            const solver = require('./8.2. Robot in a Grid/dfs');
            testRunner(tests, solver, options);
        });
        describe('bfs, Find the shortest path using BFS and return nodes visited', () => {
            const solver = require('./8.2. Robot in a Grid/bfs');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 8.3. Magic Index, including follow-up', () => {
        const tests = [
            {input: [[0,2,3,4,5,6,7]], output: 0},
            {input: [[1,2,3,4,5,6,7]], output: null},
            {input: [[-11,-9,-5,-2,4,6,8]], output: 4},
            {input: [[]], output: null},
            {input: [[-1,0,0,0,0,1,1,1,1,9,15,20,50,60]], output: 9},
            {input: [[-1,0,0,0,0,1,1,1,1,1,10,10,10,10,15]], output: 10},
            {input: [[-10,-5,2,2,2,3,4,8,9,12,13]], output: 2},
        ];

        describe('brute-force, Pass over the array and find magic index if it exists', () => {
            const solver = require('./8.3. Magic Index/brute-force');
            testRunner(tests, solver);
        });
        describe('double-binary-search, Use binary search in both directions to find magic index', () => {
            const solver = require('./8.3. Magic Index/double-binary-search');
            testRunner(tests, solver);
        });
    });

    describe('Problem 8.4. Power Set', () => {
        const tests = [
            {input: ['a'], output: [[], ['a']]},
            {input: [[1,2]], output: [[], [1],[2],[1,2]]},
            {input: [['a','b','c']], output: [[], ['a'],['b'],['c'],['a','b'],['a','c'],['b','c'],['a','b','c']]},
            {
                input: [[1,2,3,4]],
                output: [
                    [],
                    [1],[2],[3],[4],
                    [1,2],[1,3],[1,4],[2,3],[2,4],[3,4],
                    [1,2,3],[1,2,4],[1,3,4],[2,3,4],
                    [1,2,3,4]
                ]
            },
        ];

        const options = {
            compareType: assertTypes.sameDeepMembers,
        };

        describe('iterative, For input set, find all combinations of elements', () => {
            const solver = require('./8.4. Power Set/iterative');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 8.5. Recursive Multiply', () => {
        const tests = [
            {input: [2,2], output: 4},
            {input: [1,1], output: 1},
            {input: [12345,0], output: 0},
            {input: [16,16], output: 256},
            {input: [31,35], output: 1085},
        ];

        describe('brute-force, Linear addition as multiplication, easy to code, can be optimized', () => {
            const solver = require('./8.5. Recursive Multiply/brute-force');
            testRunner(tests, solver);
        });
        describe('recursive, Break up smaller sum into halves till you reach 1, then just add up at each stage', () => {
            const solver = require('./8.5. Recursive Multiply/recursive');
            testRunner(tests, solver);
        });
    });

    describe('Problem 8.6. Towers of Hanoi', () => {
        const tests = [
            {
                input: [1],
                output: [
                    "move disk 1 from a to c"
                ]
            },
            {
                input: [2],
                output: [
                    "move disk 1 from a to b",
                    "move disk 2 from a to c",
                    "move disk 1 from b to c"
                ]
            },
            {
                input: [3],
                output: [
                    "move disk 1 from a to c",
                    "move disk 2 from a to b",
                    "move disk 1 from c to b",
                    "move disk 3 from a to c",
                    "move disk 1 from b to a",
                    "move disk 2 from b to c",
                    "move disk 1 from a to c"
                ]
            },
            {
                input: [4], 
                output: [
                    'move disk 1 from a to b',
                    'move disk 2 from a to c',
                    'move disk 1 from b to c',
                    'move disk 3 from a to b',
                    'move disk 1 from c to a',
                    'move disk 2 from c to b',
                    'move disk 1 from a to b',
                    'move disk 4 from a to c',
                    'move disk 1 from b to c',
                    'move disk 2 from b to a',
                    'move disk 1 from c to a',
                    'move disk 3 from b to c',
                    'move disk 1 from a to b',
                    'move disk 2 from a to c',
                    'move disk 1 from b to c'
                ]
            },
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('iterative, Find all permutations of a string of unique characters', () => {
            const solver = require('./8.6. Towers of Hanoi/recursion');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 8.7. Permutations without Dups', () => {
        const tests = [
            {input: ['a'], output: ['a']},
            {input: ['ab'], output: ['ab','ba']},
            {input: ['abc'], output: ['abc','acb','bac','bca','cab','cba']},
        ];

        const options = {
            compareType: assertTypes.sameDeepMembers,
        };

        describe('iterative, Find all permutations of a string of unique characters', () => {
            const solver = require('./8.7. Permutations without Dups/iterative');
            testRunner(tests, solver, options);
        });
        describe('iterative-list, Find all permutations of a string of unique characters using linked list', () => {
            const solver = require('./8.7. Permutations without Dups/iterative-list');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 8.8. Permutations with Dups', () => {
        const tests = [
            {input: ['aa'], output: ['aa']},
            {input: ['aba'], output: ['aab','aba','baa']},
            {input: ['abc'], output: ['abc','acb','bac','bca','cab','cba']},
        ];

        const options = {
            compareType: assertTypes.sameDeepMembers,
        };

        describe('iterative, Find all permutations of a string of unique characters', () => {
            const solver = require('./8.8. Permutations with Dups/iterative');
            testRunner(tests, solver, options);
        });
        describe('iterative-list, Find all permutations of a string of unique characters', () => {
            const solver = require('./8.8. Permutations with Dups/iterative-list');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 8.9. Parens', () => {
        const tests = [
            {input: [1], output: ['()']},
            {input: [2], output: ['()()', '(())']},
            {input: [3], output: ['((()))','(()())','(())()','()(())','()()()']},
            {
                input: [4],
                output: [
                    "(((())))",
                    "((()()))",
                    "(())(())",
                    "()(())()",
                    "((())())",
                    "(()(()))",
                    "((()))()",
                    "()((()))",
                    "(())()()",
                    "()()(())",
                    "(()())()",
                    "()(()())",
                    "(()()())",
                    "()()()()"
                ]
            },
        ];

        const options = {
            compareType: assertTypes.sameDeepMembers,
        };

        describe('iterative, Iteratively find all valid combinations of parens given n', () => {
            const solver = require('./8.9. Parens/iterative');
            testRunner(tests, solver, options);
        });
        describe('recursive, Iteratively find all valid combinations of parens given n', () => {
            const solver = require('./8.9. Parens/recursive');
            testRunner(tests, solver, options);
        });
    });

});
