/*
Paint fill
Given a 2-dimensional array of colors and a point, fill all neighbouring points that have the same color as
    start point with new color

This is a recursive solution using DFS (depth first search)
We start with starting pixel, paint it and recursively check and paint every neighbour pixel
If neighbour exists within image, is not visited, has same color as starting pixel, paint it. Then check neighbours

Primary difference between DFS and BFS:
    DFS takes next item from top of the stack, resulting in going deep first.
    BFS visits every neighbour first, then goes to next layer of neighbours, expanding in a circle.

BFS is better when you want to find a shortest path between two points.
DFS is better for testing whether a path exists, but it may end up being slower compared to BFS in some cases.
DFS is also easier to implement using recursion.

Time complexity: O(n*m) where n and m are width and height of the image (we may need to visit every point)
Space complexity: O(n*m) for stack or queue of neighbors
 */

/**
 * Replace starting color with new color in an image
 * @param image {number[][]}    2D array filled with colors representing an image
 * @param start {number[]}      Starting point of the fill, [row, column]
 * @param color {number}        New color (written as a number)
 * @returns {number[][]}         Updated image
 */
module.exports = function paintFill(image, start, color) {
    function paint(row, col, visited) {
        if (
            row >= 0 && col >= 0 && row < image.length && col < image[0].length
            && image[row][col] === startColor
            && !visited.has(row * image[0].length + col)
        ) {
            image[row][col] = color;
            paint(row, col + 1);
            paint(row + 1, col);
            paint(row, col - 1);
            paint(row - 1, col);
        }
    }

    const startColor = image[start[0]][start[1]];
    if (startColor !== color) {
        paint(start[0], start[1], new Set());
    }

    return image;
};