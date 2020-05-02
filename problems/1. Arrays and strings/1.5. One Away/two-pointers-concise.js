/*
There are three possible operations: insert, remove, replace
Remove and insert are the same operation (depending on what string you're looking at - longer vs shorter)
So we only need to check two cases - one extra letter or one replaced letter
Compare strings one char at a time. On a mismatch:
    if length is the same, mark string as edited and continue
    if lengths are different, move shorter string's pointer one step back and continue
Return false if there is more than one mismatch
In order to properly process insert at the last position, check till the last char of the longer string

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
module.exports = function oneAway(string1, string2) {
    if (Math.abs(string1.length - string2.length) > 1) {
        return false;
    }

    let edited = false;
    const longer = Math.max(string1.length, string2.length);
    for (let i = 0, j = 0; i < longer; i++, j++) {
        if (string1[i] !== string2[j]) {
            if (edited) { // only one edit is allowed and we've used it already
                return false;
            }
            edited = true;
            if (string1.length < string2.length) {
                i--;
            } else if (string1.length > string2.length) {
                j--;
            }
        }
    }
    return true;
};
