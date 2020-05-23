/*
Current algorithm returns all permutations of input set
meaning, it combines all items in all possible combinations
this is a byproduct of Power Set problem. Made by accident
May prove useful

Can be improved by removing sets and using indexes instead (skipping duplicate indexes)

Time and space complexity taken from Number of arrangements formula
https://oeis.org/wiki/Number_of_arrangements

Time complexity: O(e*n!) (according to wikipedia)
Space complexity: O(e*n!)
 */

/**
 * Find all sub-sets of a set
 * @param inputs {[]}    Inputs array
 * @returns {[]}
 */
function powerSet(inputs) {
    const results = [[]];
    const sets = [new Set()];
    let index = 0;

    while (index < results.length) {
        for (let input of inputs) {
            if (!sets[index].has(input)) {
                sets.push(new Set([...sets[index], input]));
                results.push([...results[index], input]);
            }
        }
        index++;
    }

    return results;
}

let result = powerSet([1,2,3,4,5]);
console.log(result);
console.log(result.length);