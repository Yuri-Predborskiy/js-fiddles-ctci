/*
Compare symbol by symbol. If symbols are identical, replace one with null
If length was identical and we found every symbol of string A in string B, then B is a permutation of A

Time complexity: O(n^2)
Space complexity: O(n) for storing a copy of one of the inputs
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

    const arr = str2.split('');
    for (let i = 0; i < str1.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (str1[i] === arr[j]) {
                arr[j] = null;
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
};
