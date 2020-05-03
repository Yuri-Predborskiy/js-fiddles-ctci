const {assert} = require('chai');
const {it, describe} = require('mocha');
const _ = require('lodash');

/**
 * Standard test routine for usual problem with direct comparator of input and output
 * @param chapter {string}      Chapter name
 * @param problem {string}      Problem name
 * @param tests {array}         An array of tests, [{input, output}]
 * @param solutions {array}     An array of solutions, objects {name: string, solver: function}
 * @param [options] {object}      An object with options
 */
function startTest(chapter, problem, tests, solutions, options) {
    describe(chapter, () => {
        describe(problem, () => {
            for (let solution of solutions) {
                describe(solution.name, () => {
                    for (let test of tests) {
                        runTest(chapter, problem, solution, test.input, test.output, options);
                    }
                });
            }
        });
    });
}

function runTest(chapter, problem, solution, input, output, options = {}) {
    if (!options.comparer) {
        options.comparer = 'equal';
    }
    it(`inputs: ${JSON.stringify(input)}`, () => {
        let args = _.cloneDeep(input);
        let result = solution.solver(...args);
        if (options.serializer) {
            result = options.serializer(result);
        }
        assert[options.comparer](result, output);
    });
}

module.exports = {
    startTest,
};

/*
TODO: replace single test runner with individual tests for each problem
 advantages:
 - tests will be easier to write and run
 - inputs will be easier to print (linked list)
 - tests will be more flexible in initialization, serialization
 - it will be possible to run a single test using a single button (thanks to WebStorm integration)
 - it will be easier to make individual tests for specific results
 - it will be possible to use mocks and other advanced functionality of test frameworks
 drawbacks:
 - more code - I'll need to write each individual test
 - will need to re-write existing tests
 - a lot of repeating code between tests (which is expected for unit testing)
 */
