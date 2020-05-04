const {assert} = require('chai');
const {it, describe} = require('mocha');
const {convertArrayToLinkedList, convertLinkedListToArray} = require('../../../helpers/converters');

const tests = [
    {input: [1,2,3,4,2,3,4,1,5], output: [1,2,3,4,5]},
    {input: [1,2,3], output: [1,2,3]},
    {input: [1,1,1,1,1,2,1,3,1,1,1,0], output: [1,2,3,0]},
    {input: [], output: []},
];
const processInputs = convertArrayToLinkedList;
const processResult = convertLinkedListToArray;

describe('Chapter 2. Linked Lists', () => {
    describe('Problem 2.1. Remove Dups', () => {
        describe('no-extra-space, Remove duplicate list nodes without using extra space', () => {
            const solver = require('./no-extra-space');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    let args = processInputs(test.input);
                    let result = processResult(solver(args));
                    assert.deepEqual(result, test.output);
                });
            }
        });
        describe('set, Remove duplicates using a dictionary of elements', () => {
            const solver = require('./set');

            for (let test of tests) {
                it(`inputs: ${JSON.stringify(test.input)}`, () => {
                    let args = processInputs(test.input);
                    let result = processResult(solver(args));
                    assert.deepEqual(result, test.output);
                });
            }
        });
    });
});
