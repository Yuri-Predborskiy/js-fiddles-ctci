const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const {convertArrayToLinkedList, convertLinkedListToArray} = require('../../helpers/converters');
const testRunner = require('../../helpers/test-runner');

describe('Chapter 2. Linked Lists', () => {
    describe('Problem 2.1. Remove Dups', () => {
        const tests = [
            {input: [1,2,3,4,2,3,4,1,5], output: [1,2,3,4,5]},
            {input: [1,2,3], output: [1,2,3]},
            {input: [1,1,1,1,1,2,1,3,1,1,1,0], output: [1,2,3,0]},
            {input: [], output: []},
        ];
        const options = {
            processInput: (input) => [convertArrayToLinkedList(input)],
            processOutput: convertLinkedListToArray,
            compareType: assertTypes.deepEqual,
        };

        describe('no-extra-space, Remove duplicate list nodes without using extra space', () => {
            const solver = require('./2.1. Remove Dups/no-extra-space');
            testRunner(tests, solver, options);
        });
        describe('set, Remove duplicates using a dictionary of elements', () => {
            const solver = require('./2.1. Remove Dups/set');
            testRunner(tests, solver, options);
        });
    });
});