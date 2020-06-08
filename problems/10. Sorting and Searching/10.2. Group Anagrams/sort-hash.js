/*
Having an array of strings, group anagrams (permutations of the same string) together

Algorithm:
Sort characters in every word in ascending order. Save sorted chars into hash table.
Key = sorted chars, value = [index where word is found]. If key exists, push to array.
Go over the hash table and add each item from each array into new array
This way we'll build an array of grouped anagrams. Order of anagrams themselves is not guaranteed

--- Alternative to sorting:
write down every character in a string and save it to 26+ character array
index = charCodeAt(charIndex)
This way we will write down chars that make up the word in O(n) time
As opposed to sorting, which takes O(n*log(n)) time
The benefit is better time complexity of this specific operation
The drawback is significantly increased space use - at least 52 characters per key for hash table
--- end of alternative

Time complexity: O(m*n*log(n)) where m - number of strings, n - length of the longest string for worst case scenario
Space complexity: O(n) where n - size of input, for hash table and for copy of input in the output
*/

/**
 * Group anagrams in array of strings so that they are next to each other
 * @param stringArray {string[]}    string array where anagram strings are contained
 * @returns {string[]}              array with grouped anagrams
 */
module.exports = function groupAnagrams(stringArray) {
    const dict = new Map();
    for (let i = 0; i < stringArray.length; i++) {
        const sorted = stringArray[i].split('').sort().join('');
        if (dict.has(sorted)) {
            let arr = dict.get(sorted);
            arr.push(i);
        } else {
            dict.set(sorted, [i]);
        }
    }

    const result = [];
    for (const arr of dict.values()) {
        for (let i = 0; i < arr.length; i++) {
            result.push(stringArray[arr[i]]);
        }
    }

    return result;
};
