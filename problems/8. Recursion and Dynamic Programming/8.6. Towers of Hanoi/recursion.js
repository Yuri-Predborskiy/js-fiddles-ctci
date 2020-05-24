/*
Move all blocks from tower 1 to tower 3 using tower 2 as temp
Do not move more than one block at a time
only put smaller blocks on larger blocks

Solution inspired by Geeks for Geeks solution here:
https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/

Solution moves the blocks from one tower to another and prints what action is being taken at each step.

Due to recursion, it builds the entire path (in a recursive stack hidden from the programmer) and only THEN
    executes the stack of moves in a specific sequence. But the developer does not understand or know about it
    thus it seems like magic to most developers.
In order to implement this in an iterative manner, you have to build a path, and then execute it

Requiring an iterative solution would be a better exercise, in my opinion.

For the record: I do not use recursion in production code. Tried once, but it was hard to debug and maintain.
Now I only use iteration. Easy to support and debug, you see what is happening and where it is going.
My recommendation: do not use recursion in production environment.

Happy coding!
 */

/**
 * Move disks
 * @param n {string}    Number of disks
 * @returns {string[]}
 */
module.exports = function towersOfHanoi(n) {
    function moveDisk(size, source, destination, temp) {
        if (size === 1) {
            output.push(`move disk ${size} from ${source.name} to ${destination.name}`);
            destination.push(source.pop());
            return;
        }
        moveDisk(size - 1, source, temp, destination);
        output.push(`move disk ${size} from ${source.name} to ${destination.name}`);
        destination.push(source.pop());
        moveDisk(size - 1, temp, destination, source);
    }

    function Rod(name) {
        this.name = name;
        this.values = [];
    }

    Rod.prototype.pop = function() {
        // console.log('Removing disk', this.values[this.values.length - 1], 'from rod', this.name);
        return this.values.pop();
    };

    Rod.prototype.push = function(value) {
        // console.log('adding disk', value +
        //     (this.values.length ? ` on top of disk ${this.values[this.values.length - 1]}` : ''), 'to rod', this.name);
        return this.values.push(value);
    };

    const output = [];

    let a = new Rod('a');
    let b = new Rod('b');
    let c = new Rod('c');

    for (let i = n; i >= 1; i--) {
        a.push(i);
    }

    moveDisk(n, a, c, b);

    return output;
};