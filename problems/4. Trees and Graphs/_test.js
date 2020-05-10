const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

const {convertAdjacencyMatrixToGraph, convertBinaryTreeToArray} = require('../../helpers/converters');

describe('Chapter 4. Trees and Graphs', () => {
    describe('Problem 4.1. Route Between Nodes', () => {
        const adjacencyMatrix = [
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]
        ];
        const tests = [
            {input: [adjacencyMatrix, 0, 2], output: true}, // path from 0 to 2 exists
            {input: [adjacencyMatrix, 1, 3], output: true}, // path from 1 to 3 does not exist, 3 to 1 exists
            {input: [adjacencyMatrix, 2, 4], output: false}, // node 4 is isolated
        ];
        const options = {
            processInput: input => [convertAdjacencyMatrixToGraph(input[0]), input[1], input[2]],
        };

        describe('bfs, Check if path exists using Breadth First Search', () => {
            const solver = require('./4.1. Route Between Nodes/bfs');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 4.2. Minimal Tree', () => {
        const tests = [
            {input: [[1,2,3,4]], output: [3,2,4,1]},
            {input: [[1]], output: [1]},
            {input: [[1,2,3]], output: [2,1,3]},
            {input: [[1,2,3,4,5,6,7]], output: [4,2,6,1,3,5,7]},
        ];
        const options = {
            processOutput: output => convertBinaryTreeToArray(output),
            compareType: assertTypes.deepEqual
        };

        describe('bfs, Check if path exists using Breadth First Search', () => {
            const solver = require('./4.2. Minimal Tree/recursion');
            testRunner(tests, solver, options);
        });
    });
//
//     describe('Problem 3.2. Stack Min', () => {
//         const tests = [
//             {input: [[2,3,4,5,1,6], ['min', 'pop', 'pop', 'min', 'top']], output: [1, 6, 1, 2, 5]},
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('object-array, Stack of objects where each object has value and min so far item', () => {
//             const solver = require('./3.2. Stack Min/object-array');
//             testRunner(tests, solver, options);
//         });
//     });
//
//     describe('Problem 3.3.1. Stack of Plates', () => {
//         const tests = [
//             {
//                 input: [[1,2,3,4,5], 2, ['getSize', 'pop', 'getSize', 'pop', 'pop', 'pop', 'getSize', 'pop', 'pop']],
//                 output: [3, 5, 2, 4, 3, 2, 1, 1, undefined]
//             },
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('stack-array, Array of stacks. Automatically add new stack when last is full and remove empty', () => {
//             const solver = require('./3.3.1. Stack of Plates/stack-array');
//             testRunner(tests, solver, options);
//         });
//     });
//
//     describe('Problem 3.3.2. Stack of Plates - follow-up', () => {
//         const tests = [
//             {
//                 input: [[1,2,3,4,5], 2, ['getSize', 'pop', 'getSize', 'pop', 'pop', 'pop', 'getSize', 'pop', 'pop']],
//                 output: [3, 5, 2, 4, 3, 2, 1, 1, undefined]
//             },
//             {
//                 input: [[1,2,3,4,5], 2, ['getSize', 'popFrom:1', 'getSize', 'popFrom:1', 'getSize', 'pop', 'pop', 'getSize']],
//                 output: [3, 4, 3, 3, 2, 5, 2, 1]
//             },
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('list-of-stacks, Doubly linked list and map of list nodes where node.val = stack', () => {
//             const solver = require('./3.3.2. Stack of Plates - follow-up/list-of-stacks');
//             testRunner(tests, solver, options);
//         });
//
//         describe('stack-of-stacks, Doubly linked list and map of list nodes where node.val = stack', () => {
//             const solver = require('./3.3.2. Stack of Plates - follow-up/stack-of-stacks');
//             testRunner(tests, solver, options);
//         });
//     });
//
//     describe('Problem 3.4. Queue via Stacks', () => {
//         const tests = [
//             {
//                 input: [[
//                     // operation array: [operation[, value]]
//                     ['push', 1],
//                     ['push', 2],
//                     ['push', 3],
//                     ['pop'],
//                     ['pop'],
//                     ['push', 8],
//                     ['pop'],
//                     ['pop'],
//                     ['pop'],
//                 ]],
//                 output: [undefined, undefined, undefined, 1, 2, undefined, 3, 8, undefined]
//             },
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('object-array, Stack of objects where each object has value and min so far item', () => {
//             const solver = require('./3.4. Queue via Stacks/two-stacks');
//             testRunner(tests, solver, options);
//         });
//     });
//
//     describe('Problem 3.5. Sort Stack', () => {
//         const tests = [
//             {
//                 input: [[3,1,4,7,5,6,2]],
//                 output: [1,2,3,4,5,6,7]
//             },
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('two-stacks, Stack of objects where each object has value and min so far item', () => {
//             const solver = require('./3.5. Sort Stack/two-stacks');
//             testRunner(tests, solver, options);
//         });
//     });
//
//     describe('Problem 3.6. Animal Shelter', () => {
//         const tests = [
//             {
//                 input: [[
//                     // operation array: [operation[, value]]
//                     ['enqueue', {type: 'dog', name: 'Winston'}],
//                     ['enqueue', {type: 'cat', name: 'Chloe'}],
//                     ['enqueue', {type: 'cat', name: 'Lily'}],
//                     ['enqueue', {type: 'dog', name: 'Cody'}],
//                     ['dequeueAny'],
//                     ['dequeueDog'],
//                     ['dequeueCat'],
//                     ['dequeueAny'],
//                     ['dequeueAny'],
//                 ]],
//                 output: [
//                     undefined,
//                     undefined,
//                     undefined,
//                     undefined,
//                     {type: 'dog', name: 'Winston'},
//                     {type: 'dog', name: 'Cody'},
//                     {type: 'cat', name: 'Chloe'},
//                     {type: 'cat', name: 'Lily'},
//                     null
//                 ]
//             },
//         ];
//         const options = {
//             compareType: assertTypes.deepEqual
//         };
//
//         describe('linked-list, Implement Animal Queue using Linked List and Animal class', () => {
//             const solver = require('./3.6. Animal Shelter/linked-list');
//             testRunner(tests, solver, options);
//         });
//     });
});
