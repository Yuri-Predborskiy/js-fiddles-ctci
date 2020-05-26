/*
Paint fill
Given a 2-dimensional array of colors and a point, fill all neighbouring points that have the same color as
    start point with new color

This is an iterative solution using BFS (breadth first search) based on a queue
We start with starting pixel, check if neighbour nodes have the same color, if they do, enqueue them.
For every item in the queue: if it is not visited, replace color, mark node as visited, enqueue neighbours
    If item has been visited before, or has a different color, skip it.

Time complexity: O(n*m) where n and m are width and height of the image (we may need to visit every point)
Space complexity: O(n*m) for stack or queue of neighbors
 */

const Queue = require('../../../helpers/queue');

/**
 * Replace starting color with new color in an image
 * @param image {number[][]}    2D array filled with colors representing an image
 * @param start {number[]}      Starting point of the fill, [row, column]
 * @param color {number}        New color (written as a number)
 * @returns {number[][]}         Updated image
 */
module.exports = function paintFill(image, start, color) {
    const startColor = image[start[0]][start[1]];
    if (startColor === color) {
        return image;
    }

    const queue = new Queue();
    queue.enqueue([start[0], start[1]]);
    const visited = new Set();
    const clockwise = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (!queue.isEmpty()) {
        let [row, col] = queue.dequeue();
        if (visited.has(row * image[0].length + col)) {
            continue;
        }

        visited.add(row * image[0].length + col);
        image[row][col] = color;
        for (const [rs, cs] of clockwise) {
            const newRow = row + rs, newCol = col + cs;
            if (newRow >= 0 && newRow < image.length
                && newCol >= 0 && newCol < image[0].length
                && image[newRow][newCol] === startColor
            ) {
                queue.enqueue([newRow, newCol]);
            }
        }
    }
    return image;
};