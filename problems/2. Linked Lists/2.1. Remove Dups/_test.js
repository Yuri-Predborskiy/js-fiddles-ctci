const {startTest} = require('../../../helpers/test');
const {convertArrayToLinkedList, convertLinkedListToArray} = require('../../../helpers/converters');

const chapter = '2. Linked Lists';
const problem = '2.1. Remove Dups';
const tests = [
    {input: [convertArrayToLinkedList([1,2,3,4,2,3,4,1,5])], output: [1,2,3,4,5]},
    {input: [convertArrayToLinkedList([1,2,3])], output: [1,2,3]},
    {input: [convertArrayToLinkedList([1,1,1,1,1,2,1,3,1,1,1,0])], output: [1,2,3,0]},
    {input: [convertArrayToLinkedList([])], output: []},
];
const solutions = [
    // {
    //     name: 'no-extra-space, Remove duplicates without using extra space',
    //     solver: require('./no-extra-space'),
    // },
    {
        name: 'set, Remove duplicates using a dictionary of elements',
        solver: require('./set'),
    },
];
const options = {
    comparer: 'deepEqual',
    // initializer: convertArrayToLinkedList, // convert input into linked list
    serializer: convertLinkedListToArray, // convert output from linked list into array
};

startTest(chapter, problem, tests, solutions, options);
