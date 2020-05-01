/*
Split and sort string. Check if every letter repeats twice. One letter can be unique.
Extra constant memory for alphabet (so we can skip non-letters)

Time complexity: O(n*log(n)), slowest part is sorting
Space complexity: O(n)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
module.exports = function palindromePermutation(string) {
    const alphabet = new Set([...'abcdefghijklmnopqrstuvwxyz']);
    const arr = string.toLowerCase().split('').sort();

    let lastChar, lastCount = 0, uniques = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!alphabet.has(arr[i])) {
            continue;
        }
        if (typeof lastChar === 'undefined') {
            lastChar = arr[i];
        }
        if (lastChar === arr[i]) {
            lastCount++;
            continue;
        }
        if (lastCount % 2 !== 0) {
            uniques++;
            if (uniques > 1) {
                return false;
            }
        }
        lastChar = arr[i];
        lastCount = 1;
    }
    if (lastCount % 2 !== 0) {
        uniques++;
    }
    return uniques < 2;
};
