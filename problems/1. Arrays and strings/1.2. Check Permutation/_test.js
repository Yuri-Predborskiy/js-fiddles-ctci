const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.2. Check Permutation';
const tests = [
    {input: ['abcde', 'bacde'], output: true},
    {input: ['abb', 'bba'], output: true},
    {input: ['aa', 'aab'], output: false},
    {input: ['', ''], output: true},
    {input: ['aa', 'a'], output: false},
    {input: ['aa', 'ab'], output: false},
    {input: ['ab', 'ba'], output: true},
    {input: ['aa', ''], output: false},
    {input: ['aa', 'cc'], output: false},
    {input: ['tea', 'ate'], output: true},
    {input: ['two tea to two two', 'tea twotwo   totwo'], output: true},
];
const solutions = [
    {
        name: 'brute-force, Brute force - for each item compare to each item in the second string (array). Replace with null on match',
        solver: require('./brute-force'),
    },
    {
        name: 'map, Map of strings - compare the number of times each char from string 1 appears in string 2',
        solver: require('./map'),
    },
    {
        name: 'sort, Sort both strings, then compare character by character',
        solver: require('./sort'),
    },
];

startTest(chapter, problem, tests, solutions);
