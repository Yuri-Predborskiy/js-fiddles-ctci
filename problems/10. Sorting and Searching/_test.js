const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

// const {
//     convertAdjacencyMatrixToGraph,
//     convertBinaryTreeToArray,
//     convertArrayToBinaryTree,
//     convertLinkedListToArray,
// } = require('../../helpers/converters');

describe('Chapter 10. Sorting and Searching', () => {
    describe('Problem 10.1. Sorted Merge', () => {
        const tests = [
            {input: [[1,2], []], output: [1,2]},
            {input: [[undefined,undefined], [2,4]], output: [2,4]},
            {input: [[undefined,undefined,undefined,undefined], [2,4,6,8]], output: [2,4,6,8]},
            {input: [[1,3,undefined,undefined], [2,4]], output: [1,2,3,4]},
            {input: [[1,3,7,undefined,undefined,undefined], [2,5,9]], output: [1,2,3,5,7,9]},
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('two-pointers, Merge two sorted arrays from the end using two pointers', () => {
            const solver = require('./10.1. Sorted Merge/two-pointers');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 10.2. Group Anagrams', () => {
        const tests = [
            {input: [['listen','banana','silent']], output: ['listen','silent','banana']},
            {
                input: [['den', 'banana', 'end', 'dene', 'ask', 'need', 'ned', 'ska', 'jeep']],
                output: ['den', 'end', 'ned', 'banana', 'dene', 'need', 'ask', 'ska', 'jeep']
            },
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('sort-hash, Sort words, save sorted into hash, use hash to build result', () => {
            const solver = require('./10.2. Group Anagrams/sort-hash');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 10.3. Search in Rotated Array', () => {
        const tests = [
            {input: [[1,2,3,4], 4], output: 3},
            {input: [[3,4,1,2], 4], output: 1},
            {input: [[2,3,4,1], 4], output: 2},
            {input: [[4,1,2,3], 4], output: 0},
            {input: [[4,1,2,3], 5], output: -1},
            {input: [[1,2,3,4], 5], output: -1},
            {input: [[2,3,4,1], 5], output: -1},
        ];

        describe('binary-search, Find shift using binary search, find target using binary search and shift', () => {
            const solver = require('./10.3. Search in Rotated Array/binary-search');
            testRunner(tests, solver);
        });
    });

    describe('Problem 10.4. Sorted Search, No Size', () => {
        const tests = [
            {input: [[1,2,3,4], 4], output: 3},
            {input: [[1,2,3,4], 1], output: 0},
            {input: [[1,2,5,6], 2], output: 1},
            {input: [[1,2,3,4], 8], output: -1},
            {input: [[3,4,5,6], 1], output: -1},
            {input: [[1,2,5,6], 4], output: -1},
            {input: [[], 4], output: -1},
        ];

        describe('binary-search, Find some maximum index and do binary search, treating -1 as "too large"', () => {
            const solver = require('./10.4. Sorted Search, No Size/binary-search');
            testRunner(tests, solver);
        });
    });

    describe('Problem 10.5. Sparse Search', () => {
        const tests = [
            {input: [['at','','','','ball','','','','','','car','','','','dad','',''], 'ball'], output: 4},
            {input: [['','','','','','','','','','','','','','','','','bat'], 'bat'], output: 16},
            {input: [['at','','','','','','','','','','','','','','','',''], 'at'], output: 0},
            {input: [['','','','','','','','','','','','','','','','','bat'], 'dat'], output: -1},
            {input: [['bat','','','','','','','','','','','','','','','',''], 'kat'], output: -1},
            {input: [['at','','','','ball','','','','','','car','','','','dad','',''], 'cat'], output: -1},
        ];

        describe('binary-search, If mid is empty string, iterate through input to find a string', () => {
            const solver = require('./10.5. Sparse Search/binary-search');
            testRunner(tests, solver);
        });
    });

    describe('Problem 10.9. Sorted Matrix Search', () => {
        const tests = [
            {
                input: [
                    [
                        [15,20,40,85],
                        [20,35,80,95],
                        [30,55,95,105],
                        [40,80,100,120],
                    ],
                    55
                ],
                output: [2,1]
            },
            {
                input: [
                    [
                        [15,20,40,85],
                        [20,35,80,95],
                        [30,55,95,105],
                        [40,80,100,120],
                    ],
                    333
                ],
                output: [-1,-1]
            },
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('binary-search, Naive approach - search for target in each row using binary search', () => {
            const solver = require('./10.9. Sorted Matrix Search/binary-search');
            testRunner(tests, solver, options);
        });
        describe('binary-search-optimized, Optimized version of binary search - skip rows, cols', () => {
            const solver = require('./10.9. Sorted Matrix Search/binary-search');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 10.10. Rank from Stream', () => {
        const tests = [
            {input: [[5,1,4,4,5,9,7,13,3], [1,3,4]], output: [0,1,3]},
            {input: [[20,25,23,24,15,10,5,13], [10,25,15,20,5,3]], output: [1,7,3,4,0,-1]},
            {input: [[], [1]], output: [-1]},
            {input: [[1], []], output: []},
        ];

        const options = {
            compareType: assertTypes.deepEqual,
        };

        describe('linear, Keep track of items and check numbers in linear time', () => {
            const solver = require('./10.10. Rank from Stream/linear');
            testRunner(tests, solver, options);
        });
        describe('bst, Using binary search tree keep track of numbers when saving them', () => {
            const solver = require('./10.10. Rank from Stream/bst');
            testRunner(tests, solver, options);
        });
    });

    //
    // describe('Problem 8.2. Robot in a Grid', () => {
    //     const tests = [
    //         {input: [[[1,1], [1,1]]], output: '0:0,1:0,1:1'},
    //         {input: [[[1,0], [1,1]]], output: '0:0,1:0,1:1'},
    //         {input: [[[1,1], [0,1]]], output: '0:0,0:1,1:1'},
    //         {input: [[[1,0], [0,1]]], output: ''},
    //         {
    //             input: [[
    //                 [1,1,1],
    //                 [1,0,1],
    //                 [1,1,1]
    //             ]],
    //             output: '0:0,1:0,2:0,2:1,2:2' // go down, go right
    //         },
    //         {
    //             input: [[
    //                 [1,1,1],
    //                 [1,0,1],
    //                 [1,0,1]
    //             ]],
    //             output: '0:0,0:1,0:2,1:2,2:2' // go right, go down
    //         },
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.deepEqual,
    //     };
    //
    //     describe('dfs, Find a path using DFS and return nodes visited', () => {
    //         const solver = require('./8.2. Robot in a Grid/dfs');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('bfs, Find the shortest path using BFS and return nodes visited', () => {
    //         const solver = require('./8.2. Robot in a Grid/bfs');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.3. Magic Index, including follow-up', () => {
    //     const tests = [
    //         {input: [[0,2,3,4,5,6,7]], output: 0},
    //         {input: [[1,2,3,4,5,6,7]], output: null},
    //         {input: [[-11,-9,-5,-2,4,6,8]], output: 4},
    //         {input: [[]], output: null},
    //         {input: [[-1,0,0,0,0,1,1,1,1,9,15,20,50,60]], output: 9},
    //         {input: [[-1,0,0,0,0,1,1,1,1,1,10,10,10,10,15]], output: 10},
    //         {input: [[-10,-5,2,2,2,3,4,8,9,12,13]], output: 2},
    //     ];
    //
    //     describe('brute-force, Pass over the array and find magic index if it exists', () => {
    //         const solver = require('./8.3. Magic Index/brute-force');
    //         testRunner(tests, solver);
    //     });
    //     describe('double-binary-search, Use binary search in both directions to find magic index', () => {
    //         const solver = require('./8.3. Magic Index/double-binary-search');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 8.4. Power Set', () => {
    //     const tests = [
    //         {input: ['a'], output: [[], ['a']]},
    //         {input: [[1,2]], output: [[], [1],[2],[1,2]]},
    //         {input: [['a','b','c']], output: [[], ['a'],['b'],['c'],['a','b'],['a','c'],['b','c'],['a','b','c']]},
    //         {
    //             input: [[1,2,3,4]],
    //             output: [
    //                 [],
    //                 [1],[2],[3],[4],
    //                 [1,2],[1,3],[1,4],[2,3],[2,4],[3,4],
    //                 [1,2,3],[1,2,4],[1,3,4],[2,3,4],
    //                 [1,2,3,4]
    //             ]
    //         },
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.sameDeepMembers,
    //     };
    //
    //     describe('iterative, For input set, find all combinations of elements', () => {
    //         const solver = require('./8.4. Power Set/iterative');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.5. Recursive Multiply', () => {
    //     const tests = [
    //         {input: [2,2], output: 4},
    //         {input: [1,1], output: 1},
    //         {input: [12345,0], output: 0},
    //         {input: [16,16], output: 256},
    //         {input: [31,35], output: 1085},
    //     ];
    //
    //     describe('brute-force, Linear addition as multiplication, easy to code, can be optimized', () => {
    //         const solver = require('./8.5. Recursive Multiply/brute-force');
    //         testRunner(tests, solver);
    //     });
    //     describe('recursive, Break up smaller sum into halves till you reach 1, then just add up at each stage', () => {
    //         const solver = require('./8.5. Recursive Multiply/recursive');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 8.6. Towers of Hanoi', () => {
    //     const tests = [
    //         {
    //             input: [1],
    //             output: [
    //                 "move disk 1 from a to c"
    //             ]
    //         },
    //         {
    //             input: [2],
    //             output: [
    //                 "move disk 1 from a to b",
    //                 "move disk 2 from a to c",
    //                 "move disk 1 from b to c"
    //             ]
    //         },
    //         {
    //             input: [3],
    //             output: [
    //                 "move disk 1 from a to c",
    //                 "move disk 2 from a to b",
    //                 "move disk 1 from c to b",
    //                 "move disk 3 from a to c",
    //                 "move disk 1 from b to a",
    //                 "move disk 2 from b to c",
    //                 "move disk 1 from a to c"
    //             ]
    //         },
    //         {
    //             input: [4],
    //             output: [
    //                 'move disk 1 from a to b',
    //                 'move disk 2 from a to c',
    //                 'move disk 1 from b to c',
    //                 'move disk 3 from a to b',
    //                 'move disk 1 from c to a',
    //                 'move disk 2 from c to b',
    //                 'move disk 1 from a to b',
    //                 'move disk 4 from a to c',
    //                 'move disk 1 from b to c',
    //                 'move disk 2 from b to a',
    //                 'move disk 1 from c to a',
    //                 'move disk 3 from b to c',
    //                 'move disk 1 from a to b',
    //                 'move disk 2 from a to c',
    //                 'move disk 1 from b to c'
    //             ]
    //         },
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.deepEqual,
    //     };
    //
    //     describe('iterative, Find all permutations of a string of unique characters', () => {
    //         const solver = require('./8.6. Towers of Hanoi/recursion');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.7. Permutations without Dups', () => {
    //     const tests = [
    //         {input: ['a'], output: ['a']},
    //         {input: ['ab'], output: ['ab','ba']},
    //         {input: ['abc'], output: ['abc','acb','bac','bca','cab','cba']},
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.sameDeepMembers,
    //     };
    //
    //     describe('iterative, Find all permutations of a string of unique characters', () => {
    //         const solver = require('./8.7. Permutations without Dups/iterative');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('iterative-list, Find all permutations of a string of unique characters using linked list', () => {
    //         const solver = require('./8.7. Permutations without Dups/iterative-list');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.8. Permutations with Dups', () => {
    //     const tests = [
    //         {input: ['aa'], output: ['aa']},
    //         {input: ['aba'], output: ['aab','aba','baa']},
    //         {input: ['abc'], output: ['abc','acb','bac','bca','cab','cba']},
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.sameDeepMembers,
    //     };
    //
    //     describe('iterative, Find all permutations of a string of unique characters', () => {
    //         const solver = require('./8.8. Permutations with Dups/iterative');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('iterative-list, Find all permutations of a string of unique characters', () => {
    //         const solver = require('./8.8. Permutations with Dups/iterative-list');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.9. Parens', () => {
    //     const tests = [
    //         {input: [1], output: ['()']},
    //         {input: [2], output: ['()()', '(())']},
    //         {input: [3], output: ['((()))','(()())','(())()','()(())','()()()']},
    //         {
    //             input: [4],
    //             output: [
    //                 "(((())))",
    //                 "((()()))",
    //                 "(())(())",
    //                 "()(())()",
    //                 "((())())",
    //                 "(()(()))",
    //                 "((()))()",
    //                 "()((()))",
    //                 "(())()()",
    //                 "()()(())",
    //                 "(()())()",
    //                 "()(()())",
    //                 "(()()())",
    //                 "()()()()"
    //             ]
    //         },
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.sameDeepMembers,
    //     };
    //
    //     describe('iterative, Iteratively find all valid combinations of parens given n', () => {
    //         const solver = require('./8.9. Parens/iterative');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('recursive, Iteratively find all valid combinations of parens given n', () => {
    //         const solver = require('./8.9. Parens/recursive');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.10. Paint fill', () => {
    //     const tests = [
    //         {
    //             input: [[
    //                 [1,1,1],
    //                 [1,0,1],
    //                 [1,1,1]
    //             ], [0,0], 3],
    //             output: [
    //                 [3,3,3],
    //                 [3,0,3],
    //                 [3,3,3]
    //             ]
    //         },
    //         {
    //             input: [[
    //                 [1,2,1],
    //                 [3,0,1],
    //                 [1,1,1]
    //             ], [0,0], 3],
    //             output: [
    //                 [3,2,1],
    //                 [3,0,1],
    //                 [1,1,1]
    //             ]
    //         },
    //         {
    //             input: [[
    //                 [1,2,1,2],
    //                 [1,1,1,0]
    //             ], [1,2], 4],
    //             output: [
    //                 [4,2,4,2],
    //                 [4,4,4,0]
    //             ]
    //         }
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.deepEqual,
    //     };
    //
    //     describe('bfs, Fill the image using BFS algorithm based on queue', () => {
    //         const solver = require('./8.10. Paint Fill/bfs');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('dfs, Fill the image using DFS algorithm based on stack', () => {
    //         const solver = require('./8.10. Paint Fill/dfs');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('dfs-recursion, Fill the image using DFS algorithm, visit all pixels recursively', () => {
    //         const solver = require('./8.10. Paint Fill/dfs-recursion');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 8.11. Coins', () => {
    //     const tests = [
    //         {
    //             input: [0],
    //             output: 0
    //         },
    //         {
    //             input: [4],
    //             output: 1
    //         },
    //         {
    //             input: [5],
    //             output: 2
    //         },
    //         {
    //             input: [11],
    //             output: 4
    //         },
    //         {
    //             input: [43],
    //             output: 31
    //         },
    //         {
    //             input: [1000],
    //             output: 142511
    //         }
    //     ];
    //
    //     describe('brute-force, Using 3 loops, try all coin combinations and increase count', () => {
    //         const solver = require('./8.11. Coins/brute-force');
    //         testRunner(tests, solver);
    //     });
    //     describe('dp, Find number of combinations using dynamic programming and 2-dimensional array', () => {
    //         const solver = require('./8.11. Coins/dp');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 8.12. Eight Queens', () => {
    //     const tests = [
    //         {
    //             input: [8],
    //             output: 92
    //         }
    //     ];
    //
    //     describe('backtracking, Try to put a queen into every slot, backtracking algorithm', () => {
    //         const solver = require('./8.12. Eight Queens/backtracking');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 8.13. Stack of Boxes', () => {
    //     const tests = [
    //         {
    //             input: [[]],
    //             output: 0
    //         },
    //         {
    //             input: [[[3,3,3]]],
    //             output: 3
    //         },
    //         {
    //             input: [[[1,1,1], [2,2,2],[3,3,3]]],
    //             output: 6
    //         },
    //         {
    //             input: [[[2,2,1], [2,3,1],[3,3,3]]],
    //             output: 4
    //         },
    //         {
    //             input: [[[1,2,2], [3,3,4], [2,3,5], [7,7,7]]],
    //             output: 14 // boxes 4, 1, 2
    //         }
    //     ];
    //
    //     describe('dp, Sort boxes, then try to put one on another in stacks and return the highest stack', () => {
    //         const solver = require('./8.13. Stack of Boxes/dp');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 8.14. Boolean Evaluation', () => {
    //     const tests = [
    //         {input: ['0^0&0^1|1', true], output: 10},
    //         {input: ['1^0|0|1', false], output: 2},
    //         {input: ['0&0&0&1^1|0', true], output: 10},
    //     ];
    //
    //     describe('brute-recurse, Brute force using recursion, try everything and count results', () => {
    //         const solver = require('./8.14. Boolean Evaluation/brute-recurse');
    //         testRunner(tests, solver);
    //     });
    // });
});
