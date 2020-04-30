/*
Iterate over every character in the string. Add every character to a Set if it is not present.
Return false is item is present.

Time complexity: O(n)
Space complexity: O(n)
 */

/**
 * @param {string} string
 * @return {boolean}
 */
const isUnique = function(string) {
    let set = new Set();
    for (let i = 0; i < string.length; i++) {
        if (set.has(string[i])) {
            return false;
        }
        set.add(string[i]);
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
