/*
Three stacks using a single array
First stack starts at the start of the array
Second stack starts at the end of the array
Third stack is Fancy!
Third stack starts in the middle, and items are pushed to either side (odd to the right, even to the left)
When stacks are about to overlap, move middle stack to either side (which still has unused space)

When we "pop", we return element and decrease size of the stack
When we "push", we get the size and write into the next element
When pushing, we also check if stacks overlap. If they do, move the overlapping stack one tile away
Keep total size in mind before pushing to prevent overflow.

Benefits of this approach:
space efficient - we can use the entire array for three stacks, each stack can be as big as the whole array
    we also don't use any other data structures

Drawbacks:
can become slow - once the stacks start to overlap (take over 1/3 of the space or more),
    we have to move the middle stack left or right to free up space

Time complexity:
push: O(1) when not overlapping, O(n) when overlapping
pop: O(1) always

Extra space complexity: O(1) (constant)
 */

/**
 * Three stacks in one array. Space-efficient thanks to using linked lists for indexing
 * @param maxSize {number}     max size of all the stacks
 * @constructor
 */
function TripleStack(maxSize) {
    this.array = new Array(maxSize);
    this.maxSize = maxSize;
    this.middleStart = Math.round(maxSize / 2) - 1;
    this.leftSize = 0;
    this.middleSize = 0;
    this.rightSize = 0;
}

/**
 * Push to a specific stack
 * @param stackNumber {number}  From 0 to 2
 * @param val {*}               Value to be saved in the array
 * @returns {boolean}           Success boolean
 */
TripleStack.prototype.push = function(stackNumber, val) {
    // check if array is full
    if (this.leftSize + this.middleSize + this.rightSize >= this.maxSize) {
        return false;
    }

    if (stackNumber === 0) {
        if (this.leftSize === this.middleStart - Math.floor((this.middleSize - 1) / 2)) {
            this.moveMiddle('right');
        }
        this.array[this.leftSize] = val;
        this.leftSize++;
    }

    if (stackNumber === 1) {
        if (this.maxSize - 1 - this.rightSize === this.middleStart + Math.floor(this.middleSize / 2)) {
            this.moveMiddle('left');
        }
        this.array[this.maxSize - 1 - this.rightSize] = val;
        this.rightSize++;
    }

    if (stackNumber === 2) {
        let nextIndex = this.middleStart;
        if (this.middleSize % 2 === 0) {
            nextIndex -= Math.floor(this.middleSize / 2);
            if (this.leftSize - 1 === nextIndex) {
                this.moveMiddle('right');
                nextIndex++;
            }
        } else {
            nextIndex += Math.floor(this.middleSize / 2) + 1;
            if (nextIndex === this.maxSize - this.rightSize) {
                this.moveMiddle('left');
                nextIndex--;
            }
        }
        this.array[nextIndex] = val;
        this.middleSize++;
    }

    return true;
};

TripleStack.prototype.moveMiddle = function(direction) {
    const start = this.middleStart - Math.floor((this.middleSize - 1) / 2);
    const end = this.middleStart + Math.floor(this.middleSize / 2);
    if (direction === 'right') {
        // do not move values if there are no values
        if (this.middleSize > 0) {
            for (let i = end; i >= start; i--) {
                this.array[i + 1] = this.array[i];
            }
        }
        this.middleStart++;
    } else if (direction === 'left') {
        // do not move values if there are no values
        if (this.middleSize > 0) {
            for (let i = start; i <= end; i++) {
                this.array[i - 1] = this.array[i];
            }
        }
        this.middleStart--;
    }
};

/**
 * Pop item from a specific stack
 * @param stackNumber {number}      From 0 to 2
 * @return {*}                      Value stored at the top of the stack, or undefined
 */
TripleStack.prototype.pop = function(stackNumber) {
    if (stackNumber === 0) {
        if (this.leftSize === 0) {
            return;
        }
        const val = this.array[this.leftSize - 1];
        this.leftSize--;
        return val;
    }

    if (stackNumber === 1) {
        if (this.rightSize === 0) {
            return;
        }
        const val = this.array[this.maxSize - this.rightSize];
        this.rightSize--;
        return val;
    }

    if (stackNumber === 2) {
        if (this.middleSize === 0) {
            return;
        }
        // middle start + 1 if size is 2, - 1 if size is 3
        let index = this.middleStart;
        if (this.middleSize % 2 === 0) {
            index += Math.floor(this.middleSize / 2);
        } else {
            index -= Math.floor(this.middleSize / 2);
        }
        const val = this.array[index];
        this.middleSize--;
        return val;
    }
};

TripleStack.prototype.top = function(stackNumber) {
    if (stackNumber === 0) {
        if (this.leftSize === 0) {
            return;
        }
        return this.array[this.leftSize - 1];
    }

    if (stackNumber === 1) {
        if (this.rightSize === 0) {
            return;
        }
        return this.array[this.maxSize - this.rightSize];
    }

    if (stackNumber === 2) {
        if (this.middleSize === 0) {
            return;
        }
        // middle start + 1 if size is 2, - 1 if size is 3
        let index = this.middleStart;
        if (this.middleSize % 2 === 0) {
            index += Math.floor(this.middleSize / 2);
        } else {
            index -= Math.floor(this.middleSize / 2);
        }
        return this.array[index];
    }
};

/**
 * Returns size of a specific stack
 * @param stackNumber {number}
 * @return {number}
 */
TripleStack.prototype.getSize = function(stackNumber) {
    switch (stackNumber) {
        case 0:
            return this.leftSize;
        case 1:
            return this.rightSize;
        case 2:
            return this.middleSize;
        default:
            return 0;
    }
};

/**
 * Wrapper function for Triple Stack. Accepts operations and values, executes operations, returns array of results
 * @param size {number}         Max size of the array
 * @param operations {Array[]}  Array of operations
 * @return {array}              Array with results from operations
 */
module.exports = function wrapper(size, operations) {
    const stack = new TripleStack(size), results = [];
    for (let action of operations) {
        const [op, stackNumber, value] = action;
        results.push(stack[op](stackNumber, value));
    }

    return results;
};
