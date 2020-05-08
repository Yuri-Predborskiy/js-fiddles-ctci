const {describe} = require('mocha');
const assertTypes = require('../../helpers/assert-types');
const testRunner = require('../../helpers/test-runner');
const {
    convertArrayToLinkedList,
    convertArrayToDoublyLinkedList,
    convertLinkedListToArray
} = require('../../helpers/converters');

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
    });
    //
    // describe('Problem 2.3. Delete Middle Node', () => {
    //     const tests = [
    //         {input: [[1,2,3], 2], output: [1,3]},
    //         {input: [[1,2,3,4,5], 4], output: [1,2,3,5]},
    //         {input: [['a','b','c','d'], 3], output: ['a','b','d']},
    //     ];
    //     const options = {
    //         processInput: (input) => [convertArrayToLinkedList(input[0]), input[1]],
    //         processOutput: (output) => convertLinkedListToArray(output),
    //         compareType: assertTypes.deepEqual
    //     };
    //
    //     describe('size, Iterate twice, first time count nodes, second time stop at desired node', () => {
    //         const solver = require('./2.3. Delete Middle Node/replace');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.4. Partition', () => {
    //     const tests = [
    //         {input: [[1,2,5,1,2,1], 3], output: [1,2,1,2,1,5]},
    //         {input: [[1,2,3,2,3], 4], output: [1,2,3,2,3]},
    //     ];
    //     const options = {
    //         processInput: (input) => [convertArrayToLinkedList(input[0]), input[1]],
    //         processOutput: (output) => convertLinkedListToArray(output),
    //         compareType: assertTypes.deepEqual
    //     };
    //
    //     describe('two-runners, Two runners, one looking for nodes to swap, second looking for place to swap to', () => {
    //         const solver = require('./2.4. Partition/two-runners');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.5.1. Sum Lists', () => {
    //     const tests = [
    //         {input: [[7,1,6], [5,9,2]], output: [2,1,9]},
    //         {input: [[7,9], [5]], output: [2,0,1]},
    //     ];
    //     const options = {
    //         processInput: (input) => input.map(x => convertArrayToLinkedList(x)),
    //         processOutput: (output) => convertLinkedListToArray(output),
    //         compareType: assertTypes.deepEqual
    //     };
    //
    //     describe('two-runners, Go over one node at a time and sum their values', () => {
    //         const solver = require('./2.5.1. Sum Lists/two-runners');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.5.2. Sum Lists - follow up', () => {
    //     const tests = [
    //         {input: [[6,1,7], [2,9,5]], output: [9,1,2]},
    //         {input: [[9,7], [5]], output: [1,0,2]},
    //     ];
    //     const options = {
    //         processInput: (input) => input.map(x => convertArrayToLinkedList(x)),
    //         processOutput: (output) => convertLinkedListToArray(output),
    //         compareType: assertTypes.deepEqual
    //     };
    //
    //     describe('arrays, Save values into arrays, then iterate over arrays to sum up numbers', () => {
    //         const solver = require('./2.5.2. Sum Lists - follow up/arrays');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.6. Palindrome', () => {
    //     const tests = [
    //         {input: ['a','b','c','b','a'], output: true},
    //         {input: ['a','b','c','b'], output: false},
    //         {input: [1,2,2,1], output: true},
    //         {input: [1,1], output: true},
    //         {input: [false], output: true}, // sometimes false is true
    //         {input: [], output: true},
    //     ];
    //     const options = {
    //         processInput: (input) => [convertArrayToDoublyLinkedList(input)],
    //     };
    //
    //     describe('two-runners, If input is in a doubly linked list, use two runners approach', () => {
    //         const solver = require('./2.6. Palindrome/two-runners');
    //         testRunner(tests, solver, options);
    //     });
    //
    //     describe('array, Save all values into an array and check if it is palindrome', () => {
    //         const solver = require('./2.6. Palindrome/array');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.7. Intersection', () => {
    //     const tests = [
    //         {input: [[1,0,2,3],[4,5,'2','3'],2], output: true},
    //         {input: [[1,2,3],[4,'2','3'],1], output: true},
    //         {input: [[1,2],[1,2],-1], output: false},
    //         {input: [[1],[],-1], output: false},
    //     ];
    //     const options = {
    //         processInput: (input) => {
    //             // combine two lists at index provided at input[2]
    //             // if input[2] = -1, do not link lists
    //             const left = convertArrayToLinkedList(input[0]);
    //             const right = convertArrayToLinkedList(input[1]);
    //             if (input[2] > 0) {
    //                 let index = 0, leftNode = left.head, rightNode = right.head;
    //                 while (index++ < input[2] - 1) {
    //                     leftNode = leftNode.next;
    //                     rightNode = rightNode.next;
    //                 }
    //                 rightNode.next = leftNode.next;
    //             }
    //             return [left, right];
    //         },
    //     };
    //
    //     describe('set, Check for intersection using two runners and a set of nodes', () => {
    //         const solver = require('./2.7. Intersection/set');
    //         testRunner(tests, solver, options);
    //     });
    // });
    //
    // describe('Problem 2.8. Loop detection', () => {
    //     const tests = [
    //         {input: [[1,2,3,4,5], 2], output: 3},
    //         {input: [[1,2,3], 1], output: 2},
    //         {input: [[1,2], 1], output: 2},
    //         {input: [[1,2,3,4,5], -1], output: null}
    //     ];
    //     const options = {
    //         processInput: (input) => {
    //             // create a looping linked list. Last node is connected to node at input[1] index
    //             // if input[1] === -1, there is no loop
    //             const list = convertArrayToLinkedList(input[0]);
    //             if (input[1] !== -1) {
    //                 let node = list.head, index = 0;
    //                 while (node.next) {
    //                     node = node.next;
    //                 }
    //                 const last = node;
    //                 node = list.head;
    //                 while (node) {
    //                     node = node.next;
    //                     if (++index === input[1]) {
    //                         last.next = node;
    //                         break;
    //                     }
    //                 }
    //             }
    //             return [list];
    //         },
    //     };
    //
    //     describe('set, Check if linked list has a loop using a Set of nodes', () => {
    //         const solver = require('./2.8. Loop Detection/set');
    //         testRunner(tests, solver, options);
    //     });
    //     describe('set, Check if linked list has a loop using a Set of nodes', () => {
    //         const solver = require('./2.8. Loop Detection/two-runners');
    //         testRunner(tests, solver, options);
    //     });
    // });
});
