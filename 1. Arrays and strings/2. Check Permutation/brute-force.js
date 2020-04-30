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
const isUnique = function(str1, str2) {
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
