/*
There are three possible operations: insert, remove, replace
For the shorter string, remove looks like insert, so it is the same operation
So we actually have only two operations: insert and replace
If length is the same, compare strings char by char, if there is more than one mismatch, return false
If length is different
    if length difference is more than 1, return false
    else, find the first difference and skip over it in longer string, continue comparing afterwards

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
module.exports = function oneAway(string1, string2) {
    let mismatchCount = 0;
    if (string1.length === string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                if (mismatchCount) {
                    return false;
                }
                mismatchCount++;
            }
        }
    } else if (Math.abs(string1.length - string2.length) === 1) {
        let short = string1.length < string2.length ? string1 : string2;
        let long = string1.length > string2.length ? string1 : string2;
        let i = 0, j = 0;
        while (i < short.length) {
            if (short[i] !== long[j]) {
                if (mismatchCount) {
                    return false;
                }
                mismatchCount++;
                j++;
                continue;
            }
            i++;
            j++;
        }
    }
    return true;
};
