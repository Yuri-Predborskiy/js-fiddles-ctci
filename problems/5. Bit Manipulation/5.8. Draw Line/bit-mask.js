/*
Draw line on monochrome screen
Screen width is provided. Height can be calculated. Width should be divisible by 8
Draw line from x1 to x2 by changing all pixels to 1s
Pixels are compressed - 8 pixels into 1 integer
Algorithm
create start and end masks
start mask can be "255" (8 pixels, all black), end mask can be 0 (if last pixel is painted entirely)
when end mask is 0, we simply add that pixel to "paint over" pixels

Time complexity: O(n), going over every affected pixel using bit masks
Space complexity: O(1), modifying input directly
 */

/**
 * Draw line on monochrome image, where 1 is a black pixel and 0 is a white pixel (with white being "empty" color)
 * @param encoded {number[]}    Number array representing encoded pixels on monochrome screen, 8 pixels per integer
 * @param width {number}        Image width, should be divisible by 8
 * @param x1 {number}           start X for painting a line, inclusive, 1-indexed (pixel starts with 1 ends with 8)
 * @param x2 {number}           end X for painting a line, inclusive, 1-indexed
 * @param y {number}            row number
 * @returns {number[]}
 */
module.exports = function drawLine(encoded, width, x1, x2, y) {
    if (width % 8 !== 0 || x1 === 0 || x2 === 0) {
        return encoded;
    }
    const bits = 8, blackBlock = (1 << bits) - 1; // all 1s in a compressed pixel block which contains 8 monochrome pixels;
    const row = y * width / bits;
    let startBlock = Math.floor((x1 - 1) / bits) + row;
    let endBlock = Math.floor((x2 - 1) / bits) + row;

    const startMask = (1 << (bits - (x1 - 1) % bits)) - 1;
    const endMask = ((1 << (x2 % bits)) - 1) << (bits - (x2 % bits));

    if (startBlock === endBlock) {
        // start and end in the same place, combine masks and apply
        const mask = (startMask || 255) & (endMask || 255);
        encoded[endBlock] = encoded[endBlock] | mask;
    } else {
        encoded[startBlock] = encoded[startBlock] | startMask;
        startBlock++;
        if (endMask) {
            encoded[endBlock] = encoded[endBlock] | endMask;
            endBlock--;
        }
        // paint full pixel blocks of 8 pixels each;
        for (let i = startBlock; i <= endBlock; i++) {
            encoded[i] = blackBlock;
        }
    }

    return encoded;
};
