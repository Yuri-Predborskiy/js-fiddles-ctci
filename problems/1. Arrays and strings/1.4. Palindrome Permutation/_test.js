const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.4. Palindrome Permutation';
const tests = [
    {input: ['tact coa'], output: true},
    {input: ['john'], output: false},
    {input: ['palindrome'], output: false},
    {input: ['Don’t nod.'], output: true},
    {input: ['tattarrattat'], output: true},
    {input: ['Won’t lovers revolt now?'], output: true},
    {input: ['Sir, I demand, I am a maid named Iris.'], output: true},
    {input: ['false'], output: false},
    {input: [''], output: true},
    {input: ['a'], output: true},
    {input: ['aa'], output: true},
    {input: ['aa a'], output: true},
    {input: ['aba'], output: true},
    {input: ['ab'], output: false},
];
const solutions = [
    {
        name: 'map-count, Create a map of letters from string. Max 1 letter can have odd count, others should be even',
        solver: require('./map-count'),
    },
    {
        name: 'sort, Sort the string and count if every char repeats exactly twice, max 1 unique char',
        solver: require('./sort'),
    }
];

startTest(chapter, problem, tests, solutions);
