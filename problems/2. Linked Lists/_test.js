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

    describe('Problem 2.2. Return Kth to Last', () => {
        const tests = [
            {input: [[1,2,3,4,2,3,4,1,5], 3], output: 4},
            {input: [[1,2,3,4,2,3,4,1,5], 1], output: 5},
        ];
        const options = {
            processInput: (input) => [convertArrayToLinkedList(input[0]), input[1]],
        };

        describe('size, Iterate twice, first time count nodes, second time stop at desired node', () => {
            const solver = require('./2.2. Return Kth to Last/size');
            testRunner(tests, solver, options);
        });
        describe('two-runners, Have two runners, second N nodes behind first, return value of 2nd runner', () => {
            const solver = require('./2.2. Return Kth to Last/two-runners');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 2.3. Delete Middle Node', () => {
        const tests = [
            {input: [[1,2,3], 2], output: [1,3]},
            {input: [[1,2,3,4,5], 4], output: [1,2,3,5]},
            {input: [['a','b','c','d'], 3], output: ['a','b','d']},
        ];
        const options = {
            processInput: (input) => [convertArrayToLinkedList(input[0]), input[1]],
            processOutput: (output) => convertLinkedListToArray(output),
            compareType: assertTypes.deepEqual
        };

        describe('size, Iterate twice, first time count nodes, second time stop at desired node', () => {
            const solver = require('./2.3. Delete Middle Node/replace');
            testRunner(tests, solver, options);
        });
    });
});
