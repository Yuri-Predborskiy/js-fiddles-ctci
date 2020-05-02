const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.5. One Away';
const tests = [
    {input: ['pale', 'ple'], output: true},
    {input: ['pale', 'pale'], output: true},
    {input: ['pales', 'pale'], output: true},
    {input: ['bale', 'pale'], output: true},
    {input: ['bake', 'pale'], output: false},
    {input: ['b', ''], output: true},
    {input: ['', ''], output: true},
    {input: ['', 'p'], output: true},
    {input: ['b', 'p'], output: true},
    {input: ['bb', 'p'], output: false},
];
const solutions = [
    {
        name: 'two-pointers, Check each char in input using two pointers approach, two separate loops',
        solver: require('./two-pointers'),
    },
    {
        name: 'two-pointers-concise, Check each char in input using two pointers approach, one loop',
        solver: require('./two-pointers-concise'),
    },
];

startTest(chapter, problem, tests, solutions);
