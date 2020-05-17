/*
Brute force solution
Count 1s in a string representation of a number
Increment number by 1, count 1s. If 1s match, return number.
If you increment so bad number of bits changes, return null
Same logic with decrementing.

Counting 0s is pointless, as long as string length is the same and number of 1s is the same, number of 0s is the same.

Time complexity: O(n)
Space complexity: O(1)
 */

/**
 * Find biggest and smallest numbers with the same number of 1 bits
 * @param number {number}  Number in a decimal representation, to be converted to binary to count 1s
 * @return {number[]}
 */
module.exports = function nextNumber(number) {
    function countOnes(binary) {
        let ones = 0;
        for (let b of binary) {
            if (b === '1') {
                ones++;
            }
        }
        return ones;
    }

    /**
     * Get the next number with same number of 1s and 0s, or null if no such number exists
     * @param number {number}
     * @returns {number|null}
     */
    function getNext(number) {
        const binary = number.toString(2);
        let targetOnes = countOnes(binary);
        let currentNumber = number + 1;
        let nextBinary = currentNumber.toString(2);

        while (nextBinary.length === binary.length) {
            if (countOnes(nextBinary) === targetOnes) {
                return currentNumber;
            }
            currentNumber++;
            nextBinary = currentNumber.toString(2);
        }
        return null;
    }

    /**
     * Get the previous number with same number of 1s and 0s, or null if no such number exists
     * @param number {number}
     * @returns {number|null}
     */
    function getPrev(number) {
        const binary = number.toString(2);
        let targetOnes = countOnes(binary);
        let currentNumber = number - 1;
        let nextBinary = currentNumber.toString(2);

        while (nextBinary.length === binary.length) {
            if (countOnes(nextBinary) === targetOnes) {
                return currentNumber;
            }
            currentNumber--;
            nextBinary = currentNumber.toString(2);
        }
        return null;
    }

    return [getNext(number), getPrev(number)]; // next is 13983 ?, first 4 nexts = -1
};
