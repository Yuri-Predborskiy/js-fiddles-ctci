/*
Without using other data structures: strings only.
Brute force - for every character check if there is an identical character in the string

Time complexity: O(n^2)
Space complexity: O(1)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
const isUnique = function(string) {
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
};

let tests = [
    {
        input: ['abcde'],
        output: true,
    },
    {
        input: ['abcdeef'],
        output: false,
    },
    {
        input: ['aa'],
        output: false,
    },
    {
        input: [''],
        output: true,
    },
];

for(let i = 0; i < tests.length; i++) {
    const {input, output} = tests[i];
    const result = isUnique(...input);
    let success = result === output;
    console.log(`Test ${i}: ${success ? 'SUCCESS' : 'FAIL'}. Expected: '${output}' | calculated: '${result}'`);
}
