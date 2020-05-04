const {assert} = require('chai');
const {it, describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const inputProcessors = require('../../helpers/input-processors');

describe('Chapter 1. Arrays and strings', () => {
    describe('Problem 1.6. String Compression', () => {
        const tests = [
            {input: 'aabcccccaaa', output: 'a2b1c5a3'},
            {input: 'abc', output: 'abc'},
            {input: 'aabbcc', output: 'aabbcc'},
            {input: '', output: ''},
            {input: 'aaAAaaaaaBBBbbbcd', output: 'a2A2a5B3b3c1d1'},
        ];
        const processInput = inputProcessors.doNothing;
        const compareFunction = assertTypes.equal;

        describe('linear, Create a new string by iterating over input', () => {
            const solver = require('./1.6. String Compression/linear');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
    });

    describe('Problem 1.7. Rotate Matrix', () => {
        const tests = [
            {
                input: [
                    [1,2],
                    [3,4]
                ],
                output: [
                    [3,1],
                    [4,2]
                ]
            },
            {
                input: [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ],
                output: [
                    [7,4,1],
                    [8,5,2],
                    [9,6,3]
                ]
            },
            {
                input: [[]],
                output: [[]]
            },
            {
                input: [[1]],
                output: [[1]]
            },
            {
                input: [
                    [1, 2, 3, 4, 5 ],
                    [6, 7, 8, 9, 10],
                    [11,12,13,14,15],
                    [16,17,18,19,20],
                    [21,22,23,24,25],
                ],
                output: [
                    [21,16,11, 6, 1],
                    [22,17,12, 7, 2],
                    [23,18,13, 8, 3],
                    [24,19,14, 9, 4],
                    [25,20,15,10, 5]
                ]
            },
            {
                input: [
                    [1, 2, 3, 4, 5 , 6],
                    [7, 8, 9, 10,11,12],
                    [13,14,15,16,17,18],
                    [19,20,21,22,23,24],
                    [25,26,27,28,29,30],
                    [31,32,33,34,35,36]
                ],
                output: [
                    [31,25,19,13, 7, 1],
                    [32,26,20,14, 8, 2],
                    [33,27,21,15, 9, 3],
                    [34,28,22,16,10, 4],
                    [35,29,23,17,11, 5],
                    [36,30,24,18,12, 6],
                ]
            },
        ];
        const processInput = inputProcessors.cloneDeep;
        const compareFunction = assertTypes.deepEqual;

        describe('copy, Create a copy of the rotated matrix', () => {
            const solver = require('./1.7. Rotate Matrix/copy');
            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
        describe('in-place, Rotate NxN matrix in place', () => {
            const solver = require('./1.7. Rotate Matrix/in-place');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
    });

    describe('Problem 1.8. Zero Matrix', () => {
        const tests = [
            {input: [[1,1], [1,0]], output: [[1,0], [0,0]]},
            {input: [[1,1], [1,1]], output: [[1,1], [1,1]]},
            {input: [[1,0,1], [1,1,1], [1,1,0]], output: [[0,0,0], [1,0,0], [0,0,0]]},
            {input: [[]], output: [[]]},
            {input: [[1]], output: [[1]]},
            {
                input: [
                    [1,2,3,4,0],
                    [6,7,8,0,1],
                    [1,2,1,1,1],
                    [6,1,0,1,1],
                    [2,0,3,1,1],
                ],
                output: [
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                    [1,0,0,0,0],
                    [0,0,0,0,0],
                    [0,0,0,0,0],
                ]
            },
        ];
        const processInput = inputProcessors.cloneDeep;
        const compareFunction = assertTypes.deepEqual;

        describe('brute-force, Copy matrix, then set rows/cols to 0 depending on original matrix values', () => {
            const solver = require('./1.8. Zero Matrix/brute-force');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
        describe('set-in-place, Use two Sets to write down what rows/cols need to be updated. Update in-place', () => {
            const solver = require('./1.8. Zero Matrix/set-in-place');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
    });

    describe('Problem 1.9. String Rotation', () => {
        const tests = [
            {input: ['waterbottle', 'bottlewater'], output: true},
            {input: ['water', 'bottle'], output: false},
            {input: ['water', 'bater'], output: false},
            {input: ['aaa', 'aaa'], output: true},
        ];
        const processInput = inputProcessors.doNothing;
        const compareFunction = assertTypes.equal;

        describe('concat, Compare concatenated rotated strings, should contain original in the middle', () => {
            const solver = require('./1.9. String Rotation/concat');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    const processedInput = processInput(test.input);
                    let result = solver(...processedInput);
                    assert[compareFunction](result, test.output);
                });
            }
        });
    });
});
