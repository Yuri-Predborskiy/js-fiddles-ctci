const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.3. URLify';
const tests = [
    {input: ['Mr John Smith    '.split(''), 13], output: 'Mr%20John%20Smith'},
    {input: [''.split(''), 0], output: ''},
    {input: ['test'.split(''), 4], output: 'test'},
    {input: ['   '.split(''), 1], output: '%20'},
];
const solutions = [
    {
        name: 'array-two-pointers-backwards, Array and two pointers, starting from the end and iterating backwards',
        solver: require('./array-two-pointers-backwards'),
    },
    {
        name: 'string-rebuild, Build string from char array. Replace individual spaces with URL-friendly blocks',
        solver: require('./string-rebuild'),
    }
];

startTest(chapter, problem, tests, solutions);
