const {assert} = require('chai');
const {it, describe} = require('mocha');
const _ = require('lodash');

/**
 * Standard test routine for usual problem with direct comparator of input and output
 * @param chapter {string}      Chapter name
 * @param problem {string}      Problem name
 * @param tests {array}         An array of tests, [{input, output}]
 * @param solutions {array}     An array of solutions, objects {name: string, solver: function}
 * @param comparer {string}     A string representing comparer algorithm. Defaults to "equal"
 */
function startTest(chapter, problem, tests, solutions, comparer = 'equal') {
    describe(chapter, () => {
        describe(problem, () => {
            for (let solution of solutions) {
                describe(solution.name, () => {
                    for (let test of tests) {
                        runTest(chapter, problem, solution, test.input, test.output, comparer);
                    }
                });
            }
        });
    });
}

function runTest(chapter, problem, solution, input, output, comparer = 'equal') {
    it(`inputs: ${JSON.stringify(input)}`, () => {
        let args = _.cloneDeep(input);
        let result = solution.solver(...args);
        assert[comparer](result, output);
    });
}

module.exports = {
    startTest,
};
