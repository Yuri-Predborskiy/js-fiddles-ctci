const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.6. String Compression';
const tests = [
    {input: ['aabcccccaaa'], output: 'a2b1c5a3'},
    {input: ['abc'], output: 'abc'},
    {input: ['aabbcc'], output: 'aabbcc'},
    {input: [''], output: ''},
    {input: ['aaAAaaaaaBBBbbbcd'], output: 'a2A2a5B3b3c1d1'},
];
const solutions = [
    {
        name: 'linear, Create a new string by iterating over input',
        solver: require('./linear'),
    },
];

startTest(chapter, problem, tests, solutions);
