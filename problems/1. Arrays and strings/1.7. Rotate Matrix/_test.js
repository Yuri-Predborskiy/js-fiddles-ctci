const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.7. Rotate Matrix';
const tests = [
    {
        input: [[
            [1,2],
            [3,4]
        ]],
        output: [
            [3,1],
            [4,2]
        ]
    },
    {
        input: [[
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ]],
        output: [
            [7,4,1],
            [8,5,2],
            [9,6,3],
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
            [1, 2, 3, 4, 5 ],
            [6, 7, 8, 9, 10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25],
        ]],
        output: [
            [21,16,11, 6, 1],
            [22,17,12, 7, 2],
            [23,18,13, 8, 3],
            [24,19,14, 9, 4],
            [25,20,15,10, 5]
        ]
    },
    {
        input: [[
            [1, 2, 3, 4, 5 , 6],
            [7, 8, 9, 10,11,12],
            [13,14,15,16,17,18],
            [19,20,21,22,23,24],
            [25,26,27,28,29,30],
            [31,32,33,34,35,36]
        ]],
        output: [
            [31,25,19,13, 7, 1],
            [32,26,20,14, 8, 2],
            [33,27,21,15, 9, 3],
            [34,28,22,16,10, 4],
            [35,29,23,17,11, 5],
            [36,30,24,18,12, 6],
        ]
    },
];
const solutions = [
    {
        name: 'copy, Create a copy of the rotated matrix',
        solver: require('./copy'),
    },
    {
        name: 'in-place, Rotate NxN matrix in place',
        solver: require('./in-place'),
    },
];
const comparer = 'deepEqual';

startTest(chapter, problem, tests, solutions, {comparer});
