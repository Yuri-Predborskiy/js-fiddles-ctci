/*
Break strings into arrays (O(n)), sort them (O(n*log(n))). Compare symbol by symbol (O(n)).
If B is a permutation of A, strings will be identical.

Time complexity: O(n*log(n)) due to sorting
Space complexity: O(n) for storing copies of inputs broken into strings
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
module.exports = function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const left = str1.split('').sort();
    const right = str2.split('').sort();

    for (let i = 0; i < str1.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
};
