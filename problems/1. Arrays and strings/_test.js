const {assert} = require('chai');
const {it, describe} = require('mocha');

describe('Chapter 1. Arrays and strings', () => {
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
        describe('brute-force, Copy matrix, then set rows/cols to 0 depending on original matrix values', () => {
            const solver = require('./1.8. Zero Matrix/brute-force');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    let result = solver(test.input);
                    assert.deepEqual(result, test.output);
                });
            }
        });
        describe('set-in-place, Use two Sets to write down what rows/cols need to be updated. Update in-place', () => {
            const solver = require('./1.8. Zero Matrix/set-in-place');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    let result = solver(test.input);
                    assert.deepEqual(result, test.output);
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

        describe('concat, Compare concatenated rotated strings, should contain original in the middle', () => {
            const solver = require('./1.9. String Rotation/concat');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    let result = solver(...test.input);
                    assert.equal(result, test.output);
                });
            }
        });
    });
});
