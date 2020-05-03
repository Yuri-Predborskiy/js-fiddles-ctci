const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.8. Zero Matrix';
const tests = [
    {
        input: [[
            [1,1],
            [1,0]
        ]],
        output: [
            [1,0],
            [0,0]
        ]
    },
    {
        input: [[
            [1,1],
            [1,1]
        ]],
        output: [
            [1,1],
            [1,1]
        ]
    },
    {
        input: [[
            [1,0,1],
            [1,1,1],
            [1,1,0],
        ]],
        output: [
            [0,0,0],
            [1,0,0],
            [0,0,0],
        ]
    },
    {
        input: [[[]]],
        output: [[]]
    },
    {
        input: [[[1]]],
        output: [[1]]
    },
    {
        input: [[
            [1,2,3,4,0],
            [6,7,8,0,1],
            [1,2,1,1,1],
            [6,1,0,1,1],
            [2,0,3,1,1],
        ]],
        output: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [1,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ]
    },
];
const solutions = [
    {
        name: 'brute-force, Copy matrix, then set rows/cols to 0 depending on original matrix values',
        solver: require('./brute-force'),
    },
    {
        name: 'set-in-place, Use two Sets to write down what rows/cols need to be updated. Update in-place',
        solver: require('./set-in-place'),
    },
];
const comparer = 'deepEqual';

startTest(chapter, problem, tests, solutions, comparer);
