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


        // implement three stacks that share a single array (of a fixed size?)
        // 1. break array up into fixed parts, push - write into array part (keep start index and size for each stack)
        //  benefits: fast, simple; drawbacks: inefficient use of space in array (fixed amount of space for each stack)
        // 2. create 3 linked lists that contain indexes for items in each stack within the same array
        //  benefits: fast, efficient use of space in array; drawbacks: extra space for linked lists



        // const tests = [
        //     {input: [1,2,3,4,2,3,4,1,5], output: [1,2,3,4,5]},
        //     {input: [1,2,3], output: [1,2,3]},
        //     {input: [1,1,1,1,1,2,1,3,1,1,1,0], output: [1,2,3,0]},
        //     {input: [], output: []},
        // ];
        // const options = {
        //     processInput: (input) => [convertArrayToLinkedList(input)],
        //     processOutput: convertLinkedListToArray,
        //     compareType: assertTypes.deepEqual,
        // };
        //
        // describe('no-extra-space, Remove duplicate list nodes without using extra space', () => {
        //     const solver = require('./2.1. Remove Dups/no-extra-space');
        //     testRunner(tests, solver, options);
        // });
        // describe('set, Remove duplicates using a dictionary of elements', () => {
        //     const solver = require('./2.1. Remove Dups/set');
        //     testRunner(tests, solver, options);
        // });
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
