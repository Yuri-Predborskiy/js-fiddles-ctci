/*
Create a stack of boxes where smaller boxes can be put on bigger boxes, return max height of stack
Bigger boxes should be bigger in EVERY dimension than the smaller boxes
Rotation is not allowed

Check if a box can be put on top of another box stack.
If you can put a box on top of another stack, update current stack height to that stack + current box
    if resulting stack is higher than current stack
DP table has same indexes as boxes and represents stacks of boxes ending with box at the same index
Boxes are sorted - bigger boxes are always at the start, smaller boxes are always later
This allows us to check if current box can be fit on top of a larger stack of boxes (coming earlier)
If this box fits on another stack. this stack's height is that stack's height + current box height
Base stack means a stack of boxes where the top box is at dp[index]

Time complexity: O(n^2)
Space complexity: O(n)
 */

/**
 * Build a stack of boxes and return max possible stack height
 * @param boxes {[[number, number, number]]}    Array of boxes, each box has len, wid, height
 * @returns {number}
 */
module.exports = function stackOfBoxes(boxes) {
    // base box should be larger in every way compared to top box
    function canPutTopOnBase(top, base) {
        return base[0] > top[0] && base[1] > top[1] && base[2] > top[2];
    }

    boxes.sort((top, base) => canPutTopOnBase(top, base) ? 1 : -1);

    const dp = []; // max height of box stack with boxes[index] used as a base of the stack
    for (let i = 0; i < boxes.length; i++) {
        dp[i] = boxes[i][2]; // every stack starts with one box
    }

    for (let base = 0; base < boxes.length; base++) {
        for (let top = base + 1; top < boxes.length; top++) {
            if (base === top) {
                continue;
            }
            if (canPutTopOnBase(boxes[top], boxes[base])) {
                dp[top] = Math.max(boxes[top][2] + dp[base], dp[top]);
            }
        }
    }

    let max = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return max;
};
