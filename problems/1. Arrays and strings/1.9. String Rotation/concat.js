/*
Check if string2 is a rotation of string1 using only _one_ call to isSubstring
How isSubstring is realized was not part of the question, so we'll use a simple approach - string.includes(substring)
To check if string2 is a rotation of string1, simply glue two string2 together.
If it is a rotation, two string2s will include one string1 in the middle
Example:
string1 = waterbottle
string2 = erbottlewat
s3 = string2+string2 = erbottlewaterbottlewat
s3 includes waterbottle in the middle

If we could use two calls, we'd be able to break new string into sections, glue them together and compare the strings
But the limitation is using only a single call (it self-destroys after a single call, apparently)

Time complexity: O(n^2), checking if one string includes another string is O(n^2) in the worst case
Space complexity: O(n), for a duplicated string
 */

/**
 * Check if a string is a part of a larger string (is substring of another string)
 * @param {string} substring    part of the bigger whole
 * @param {string} string       the bigger whole in which we'll be looking for a part
 * @return {boolean}
 */
function isSubstring(substring, string) {
    return string.includes(substring);
}

/**
 * Rotates matrix by 90 degrees clockwise, in place
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
module.exports = function stringRotation(str1, str2) {
    let concat = str2 + str2;
    return isSubstring(str1, concat);
};
