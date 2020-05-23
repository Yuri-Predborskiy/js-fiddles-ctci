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

    describe('Problem 8.2. Triple Step', () => {
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

    // describe('Problem 5.2. Binary to String', () => {
    //     const tests = [
    //         {input: [0.75], output: '0.11'},
    //         {input: [0.5], output: '0.1'},
    //         {input: [0.375], output: '0.011'},
    //         {input: [0.1], output: 'ERROR'},
    //         {input: [0.2], output: 'ERROR'},
    //     ];
    //
    //     describe('calculus, Multiply by 2 to see if number is more than 1. Keep multiplying till fraction is 0', () => {
    //         const solver = require('./5.2. Binary to String/calculus');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 5.3. Flip Bit to Win', () => {
    //     const tests = [
    //         {input: [1775], output: 8},
    //         {input: [0], output: 1},
    //         {input: [2], output: 2},
    //         {input: [982734], output: 11},
    //     ];
    //
    //     describe('count-nums, Count 1s to find two longest consecutive sequences of 1s separated by a single 0', () => {
    //         const solver = require('./5.3. Flip Bit to Win/count-nums');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 5.4. Next Number', () => {
    //     const tests = [
    //         {input: [3], output: [null, null]},
    //         {input: [22], output: [25, 21]},
    //         {input: [13948], output: [13967, 13946]},
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.deepEqual,
    //     };
    //
    //     describe('brute-force, Brute force approach, find next/prev number with same # of 1s/0s in bit string', () => {
    //         const solver = require('./5.4. Next Number/brute-force-string');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 5.5. Debugger', () => {
    //     const tests = [
    //         {input: [15], output: false},
    //         {input: [16], output: true},
    //         {input: [24], output: false},
    //         {input: [8], output: true},
    //     ];
    //
    //     describe('power-of-2, Code checks if number is a power of 2 (I cheated - looked at the solution)', () => {
    //         const solver = require('./5.5. Debugger/power-of-2');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 5.6. Conversion', () => {
    //     const tests = [
    //         {input: [2, 3], output: 1},
    //         {input: [29, 15], output: 2},
    //     ];
    //
    //     describe('xor-count, Apply XOR and count 1s', () => {
    //         const solver = require('./5.6. Conversion/xor-count');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 5.7. Pairwise Swap', () => {
    //     const tests = [
    //         {input: ['1101010010'], output: '1110100001'},
    //     ];
    //
    //     describe('loop-swap, Swap even and odd bits, one pair at a time', () => {
    //         const solver = require('./5.7. Pairwise Swap/loop-swap');
    //         testRunner(tests, solver);
    //     });
    // });
    //
    // describe('Problem 5.8. Draw Line', () => {
    //     const tests = [
    //         {input: [[0,0], 8, 1, 2, 0], output: [192,0]},
    //         {input: [[0,0], 8, 1, 8, 0], output: [255,0]},
    //         {input: [[0,0], 8, 3, 6, 0], output: [60,0]},
    //         {input: [[0,0], 8, 1, 16, 0], output: [255,255]},
    //         {input: [[0,0,0], 8, 3, 13, 0], output: [63,248,0]},
    //         {input: [[0,0,0,0,0,0,0,0], 32, 9, 16, 0], output: [0,255,0,0,0,0,0,0]},
    //         {input: [[0,0,0,0,0,0,0,0], 32, 3, 28, 1], output: [0,0,0,0,63,255,255,240]},
    //         {input: [[0,0,0,0,0,0,0,0], 32, 6, 28, 1], output: [0,0,0,0,7,255,255,240]},
    //         {input: [[0], 4, 4, 8, 1], output: [0]},
    //     ];
    //
    //     const options = {
    //         compareType: assertTypes.deepEqual,
    //     };
    //
    //     describe('bit-mask, Apply bit mask to start and end pixel blocks and replace full pixel blocks', () => {
    //         const solver = require('./5.8. Draw Line/bit-mask');
    //         testRunner(tests, solver, options);
    //     });
    // });
});
