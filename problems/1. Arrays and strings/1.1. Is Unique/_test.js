const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.1. Is Unique';
const tests = [
    {input: ['abcde'], output: true},
    {input: ['abcdeef'], output: false},
    {input: ['aa'], output: false},
    {input: [''], output: true},
];
const solutions = [
    {
        name: 'set-loop, Hash table using Set. For each char check if set contains it already. If not, add and continue',
        solver: require('./set-loop'),
    },
    {
        name: 'set-simple, Initialize a set using string and compare string length vs set size (should be the same)',
        solver: require('./set-simple'),
    },
    {
        name: 'strings-only, Brute force - for each character check if there are same characters later',
        solver: require('./strings-only'),
    },
];

startTest(chapter, problem, tests, solutions);
