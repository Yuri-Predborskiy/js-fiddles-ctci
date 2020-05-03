const {startTest} = require('../../../helpers/test');

const chapter = '1. Arrays and strings';
const problem = '1.9. String Rotation';
const tests = [
    {input: ['waterbottle', 'bottlewater'], output: true},
    {input: ['water', 'bottle'], output: false},
    {input: ['water', 'bater'], output: false},
    {input: ['aaa', 'aaa'], output: true},
];
const solutions = [
    {
        name: 'concat, Compare concatenated rotated strings, should contain original in the middle',
        solver: require('./concat'),
    },
];

startTest(chapter, problem, tests, solutions);
