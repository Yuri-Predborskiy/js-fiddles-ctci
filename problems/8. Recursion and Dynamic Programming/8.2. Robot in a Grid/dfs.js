/*
Robot in a grid
Going right or down, find out if there is a path from top left to bottom right
There are two ways to approach this specific problem
BFS (breadth-first search)
DFS (depth-first search)
Using BFS we can find the shortest path, but it will require visiting more cells (potentially)
Using DFS we can find if a path exists, although we may end up with a longer path compared to BFS

Since we need to find any path, DFS is going to be easier to implement using a stack (array)

Time complexity: O(n*m) where n is the number of nodes and m is number of connections between nodes
Space complexity: O(n^2) we store path for each visited node separately
 */

/**
 * Find a path from top-left corner to bottom right corner, return null if path does not exist
 * @param matrix {number[][]}   Grid (matrix) that shows where the robot can and cannot move
 * @returns {string}            String representing path taken
 */
module.exports = function robotInAGrid(matrix) {
    const stack = [[0,0,'']];
    const visited = new Set();

    while (stack.length > 0) {
        let [row, col, path] = stack.pop();
        path += `${row}:${col},`;
        visited.add(`${row}-${col}`);
        if (row === matrix.length - 1 && col === matrix[0].length - 1) {
            return path.substring(0, path.length - 1);
        }
        if (col + 1 < matrix[0].length && !visited.has(`${row}-${col + 1}`) && matrix[row][col + 1] === 1) {
            stack.push([row, col + 1, path]);
        }
        if (row + 1 < matrix.length && !visited.has(`${row + 1}-${col}`) && matrix[row + 1][col] === 1) {
            stack.push([row + 1, col, path]);
        }
    }
    return '';
};