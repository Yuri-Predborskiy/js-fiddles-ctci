/*
Count the number of 1s in a row, followed by a single 0 and more 1s
The idea is - we can flip one 0 to a 1 and combine two sequences into one long sequence
Return such sequence

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * Flip one bit to find the longest possible streak of 1s in a row
 * @param num {number}  Number in a decimal representation, to be converted to binary to count 1s
 * @return {number}
 */
module.exports = function flipBitToWin(num) {
    const binary = num.toString(2);
    let lastLength = 0, currentLength = 0, maxLength = 1;
    for (let bit of binary) {
        if (bit === '1') {
            currentLength++;
        } else {
            const maxLocal = currentLength + lastLength + 1;
            if (maxLocal > maxLength) {
                maxLength = maxLocal;
            }
            lastLength = currentLength;
            currentLength = 0;
        }
    }
    return Math.max(maxLength, currentLength + lastLength + 1);
};