const {assert} = require('chai');
const {it, describe} = require('mocha');

describe('Chapter 1. Arrays and strings', () => {
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
