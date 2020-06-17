const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

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

    describe('Problem 10.11. Peaks and Valleys', () => {
        const tests = [
            // oneOf cannot be used to compare arrays, but we can join arrays into strings and compare strings
            {input: [[3,2,1,4,5,6]], output: ['2,1,4,3,6,5', '2,3,1,5,4,6']},
            {input: [[]], output: ['']},
            {input: [[1]], output: ['1']},
            {input: [[1,2]], output: ['1,2', '2,1']},
        ];

        const options = {
            processInput: input => [input[0].slice()],
            processOutput: output => output.join(),
            compareType: assertTypes.oneOf,
        };

        describe('sort-and-swap, Sort items, swap one pair, jump 2 items forward, repeat', () => {
            const solver = require('./10.11. Peaks and Valleys/sort-and-swap');
            testRunner(tests, solver, options);
        });
        describe('plain-swap, Sort items, swap one pair, jump 2 items forward, repeat', () => {
            const solver = require('./10.11. Peaks and Valleys/plain-swap');
            testRunner(tests, solver, options);
        });
    });
});
