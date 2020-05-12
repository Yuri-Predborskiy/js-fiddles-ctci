/*
Find the first common ancestor of two nodes, left and right
Iterate over the tree recursively using depth first search algorithm
Return node you have as soon as both child nodes are found (left and right)

While iterating, if we have ancestor node, exit immediately
If we have ancestor node - exit
Compare node value with left and right to check if it is left or right
If we have found both left and right
    set ancestor to current node and exit
This prevents useless work

Search left for desired nodes recursively
If left found ancestor - exit
If we found both left and right
    set ancestor to current node and exit

Search right for desired nodes recursively
If right found ancestor - exit
If we have found both left and right
    set ancestor to current node and exit

There is some repeating code but it prevents extra work from being done where it is not necessary

Time complexity: O(p + d) where p - number of projects (nodes), d - number of dependencies (edges)
Space complexity: O(n) for project map
 */

/**
 * Find common ancestor of two nodes. Most obvious choices are not allowed, like links to parents, storing nodes in Set
 * @param root {TreeNode}   tree root
 * @param p {*}             One of the values we want to find common ancestor of
 * @param q {*}             One of the values we want to find common ancestor of
 * @returns {*}             Value of the common ancestor node
 */
module.exports = function firstCommonAncestor(root, p, q) {
    function searchNode(root, params = {}) {
        if (params.ancestor || !root) {
            return params;
        }

        if (root.val === p) {
            params.foundP = true;
        } else if (root.val === q) {
            params.foundQ = true;
        }
        if (params.foundP && params.foundQ) {
            return {ancestor: root};
        }
        // we haven't found one or both of our nodes
        const paramsLeft = searchNode(root.left);
        if (paramsLeft.ancestor) {
            return paramsLeft;
        }
        params = {...params, ...paramsLeft};
        if (params.foundP && params.foundQ) {
            return {ancestor: root};
        }

        const paramsRight = searchNode(root.right);
        if (paramsRight.ancestor) {
            return paramsRight;
        }
        params = {...params, ...paramsRight};
        if (params.foundP && params.foundQ) {
            return {ancestor: root};
        }

        return params;
    }
    const result = searchNode(root);
    if (result.ancestor) {
        return result.ancestor.val;
    }
    return null;
};
