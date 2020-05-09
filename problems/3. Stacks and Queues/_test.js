const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');

describe('Chapter 3. Stacks and Queues', () => {
    describe('Problem 3.1. Three in One', () => {
        const tests = [
            {
                input: [5, [
                    // operation array: [operation, stack[, value]]
                    ['push', 0, 1],
                    ['push', 0, 2],
                    ['push', 0, 3],
                    ['push', 0, 4],
                    ['push', 0, 5],
                    ['push', 0, 6],
                    ['pop', 0],
                    ['push', 1, 12],
                    ['push', 2, 23],
                    ['top', 0],
                    ['top', 1],
                    ['top', 2],
                    ['getSize', 0]
                ]],
                output: [true, true, true, true, true, false, 5, true, false, 4, 12, undefined, 4]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('linked-lists, N stacks in one array using N+1 doubly linked lists (details in the file)', () => {
            const solver = require('./3.1. Three in One/linked-lists');
            testRunner(tests, solver, options);
        });

        describe('space-efficient-fancy, Three stacks sharing one array with fancy middle stack', () => {
            const solver = require('./3.1. Three in One/space-efficient-fancy');
            testRunner(tests, solver, options);
        });

        describe('space-efficient-simple, Three stacks sharing one array, straightforward implementation', () => {
            const solver = require('./3.1. Three in One/space-efficient-simple');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.2. Stack Min', () => {
        const tests = [
            {input: [[2,3,4,5,1,6], ['min', 'pop', 'pop', 'min', 'top']], output: [1, 6, 1, 2, 5]},
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('object-array, Stack of objects where each object has value and min so far item', () => {
            const solver = require('./3.2. Stack Min/object-array');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.3.1. Stack of Plates', () => {
        const tests = [
            {
                input: [[1,2,3,4,5], 2, ['getSize', 'pop', 'getSize', 'pop', 'pop', 'pop', 'getSize', 'pop', 'pop']],
                output: [3, 5, 2, 4, 3, 2, 1, 1, undefined]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('stack-array, Array of stacks. Automatically add new stack when last is full and remove empty', () => {
            const solver = require('./3.3.1. Stack of Plates/stack-array');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.3.2. Stack of Plates - follow-up', () => {
        const tests = [
            {
                input: [[1,2,3,4,5], 2, ['getSize', 'pop', 'getSize', 'pop', 'pop', 'pop', 'getSize', 'pop', 'pop']],
                output: [3, 5, 2, 4, 3, 2, 1, 1, undefined]
            },
            {
                input: [[1,2,3,4,5], 2, ['getSize', 'popFrom:1', 'getSize', 'popFrom:1', 'getSize', 'pop', 'pop', 'getSize']],
                output: [3, 4, 3, 3, 2, 5, 2, 1]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('list-of-stacks, Doubly linked list and map of list nodes where node.val = stack', () => {
            const solver = require('./3.3.2. Stack of Plates - follow-up/list-of-stacks');
            testRunner(tests, solver, options);
        });

        describe('stack-of-stacks, Doubly linked list and map of list nodes where node.val = stack', () => {
            const solver = require('./3.3.2. Stack of Plates - follow-up/stack-of-stacks');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.4. Queue via Stacks', () => {
        const tests = [
            {
                input: [[
                    // operation array: [operation[, value]]
                    ['push', 1],
                    ['push', 2],
                    ['push', 3],
                    ['pop'],
                    ['pop'],
                    ['push', 8],
                    ['pop'],
                    ['pop'],
                    ['pop'],
                ]],
                output: [undefined, undefined, undefined, 1, 2, undefined, 3, 8, undefined]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('object-array, Stack of objects where each object has value and min so far item', () => {
            const solver = require('./3.4. Queue via Stacks/two-stacks');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.5. Sort Stack', () => {
        const tests = [
            {
                input: [[3,1,4,7,5,6,2]],
                output: [1,2,3,4,5,6,7]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('two-stacks, Stack of objects where each object has value and min so far item', () => {
            const solver = require('./3.5. Sort Stack/two-stacks');
            testRunner(tests, solver, options);
        });
    });

    describe('Problem 3.6. Animal Shelter', () => {
        const tests = [
            {
                input: [[
                    // operation array: [operation[, value]]
                    ['enqueue', {type: 'dog', name: 'Winston'}],
                    ['enqueue', {type: 'cat', name: 'Chloe'}],
                    ['enqueue', {type: 'cat', name: 'Lily'}],
                    ['enqueue', {type: 'dog', name: 'Cody'}],
                    ['dequeueAny'],
                    ['dequeueDog'],
                    ['dequeueCat'],
                    ['dequeueAny'],
                    ['dequeueAny'],
                ]],
                output: [
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    {type: 'dog', name: 'Winston'},
                    {type: 'dog', name: 'Cody'},
                    {type: 'cat', name: 'Chloe'},
                    {type: 'cat', name: 'Lily'},
                    null
                ]
            },
        ];
        const options = {
            compareType: assertTypes.deepEqual
        };

        describe('linked-list, Implement Animal Queue using Linked List and Animal class', () => {
            const solver = require('./3.6. Animal Shelter/linked-list');
            testRunner(tests, solver, options);
        });
    });
});
