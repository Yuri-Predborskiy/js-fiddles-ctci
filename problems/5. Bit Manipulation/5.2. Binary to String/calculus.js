/*
Multiply number by 2 to see if it is more than 1. If it is, push 1 to string, otherwise push 0.
Return ERROR if number cannot be represented with 32 bits

Time complexity: O(n)
Space complexity: O(n) for output
 */

/**
 * Convert fraction of a number (from 0 to 1) to binary, return string with binary representation. Or ERROR
 * @param num {number}          Fraction of a number, from 0 to 1 (exclusive)
 * @return {string|'ERROR'}
 */
module.exports = function binaryToString(num) {
    if (num >= 1 || num <= 0) {
        return 'ERROR';
    }

    const result = [0, '.'];
    let fraction = num;
    while (fraction !== 0) {
        if (result.length > 32) {
            return 'ERROR';
        }
        fraction *= 2;
        const integer = Math.floor(fraction);
        result.push(integer); // 0 or 1
        fraction = (fraction - integer) % 1;
    }

    return result.join('');
};