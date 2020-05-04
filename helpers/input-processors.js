const _ = require('lodash');

function doNothing(input) {
    return input;
}

function cloneDeep(input) {
    return _.cloneDeep(input);
}

module.exports = {
    doNothing,
    cloneDeep,
};
