const {assert} = require('chai');
const {it} = require('mocha');
const compareTypes = require('./assert-types');

/**
 * Function that will run Mocha tests with provided parameters
 * @param tests {[{input: array, output: *}]}       Array of tests, each contains an object with inputs and outputs
 * @param solver {function}                         Solver function will be executed for each test
 * @param [options] {{processInput: function, processOutput: function, compareType: string}}
 */
module.exports = function testRunner(tests, solver, options = {}) {
    let {compareType, processInput, processOutput} = options;
    compareType = compareType || compareTypes.equal;
    for (const test of tests) {
        it(`inputs: ${JSON.stringify(test.input)}`, () => {
            const processedInput = processInput ? processInput(test.input) : test.input;
            const result = solver(...processedInput);
            const myOutput = processOutput ? processOutput(result) : result;
            assert[compareType](myOutput, test.output);
        });
    }
};