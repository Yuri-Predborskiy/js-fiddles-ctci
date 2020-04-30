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
const isUnique = function(str1, str2) {
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

let tests = [
    {
        input: ['abcde', 'bacde'],
        output: true,
    },
    {
        input: ['abb', 'bba'],
        output: true,
    },
    {
        input: ['aa', 'aab'],
        output: false,
    },
    {
        input: ['', ''],
        output: true,
    },
    {
        input: ['aa', 'a'],
        output: false,
    },
    {
        input: ['aa', 'ab'],
        output: false,
    },
    {
        input: ['ab', 'ba'],
        output: true,
    },
    {
        input: ['aa', ''],
        output: false,
    },
    {
        input: ['aa', 'cc'],
        output: false,
    },
    {
        input: ['tea', 'ate'],
        output: true,
    },
    {
        input: ['two tea to two two', 'tea twotwo   totwo'],
        output: true,
    },
];

for(let i = 0; i < tests.length; i++) {
    const {input, output} = tests[i];
    const result = isUnique(...input);
    let success = result === output;
    console.log(`Test ${i}: ${success ? 'SUCCESS' : 'FAIL'}. Expected: '${output}' | calculated: '${result}'`);
}
