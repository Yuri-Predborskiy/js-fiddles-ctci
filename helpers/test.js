const {expect} = require('chai');
const {it, describe} = require('mocha');
const _ = require('lodash');

/**
 * Standard test routine for usual problem with direct comparator of input and output
 * @param chapter {string}      Chapter name
 * @param problem {string}      Problem name
 * @param tests {array}         An array of tests, [{input, output}]
 * @param solutions {array}     An array of solutions, objects {name: string, solver: function}
 */
function startTest(chapter, problem, tests, solutions) {
    describe(chapter, () => {
        describe(problem, () => {
            for (let solution of solutions) {
                describe(solution.name, () => {
                    for (let test of tests) {
                        runTest(chapter, problem, solution, test.input, test.output);
                    }
                });
            }
        });
    });
}

function runTest(chapter, problem, solution, input, output) {
    it(`inputs: ${JSON.stringify(...input)}`, () => {
        let args = _.cloneDeep(input);
        let result = solution.solver(...args);
        expect(result).to.equal(output);
    });
}

module.exports = {
    startTest,
};
