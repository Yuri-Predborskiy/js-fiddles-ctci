/*
Calculate build order of projects which are dependent on each other
If there is a cycle and build order cannot be calculated, return error
Algorithm - breadth first search (BFS)
Build all projects that depend on no others.
Their children are those projects that depend on current projects
Build those children whose dependencies were built previously
Then check children's children and so on

DFS could work but it is a less intuitive approach in this case

Edge cases not covered:
something else (not in the list of projects) depends on our project - ignore
our project depends on something else - return error immediately

Time complexity: O(p + d) where p - number of projects (nodes), d - number of dependencies (edges)
Space complexity: O(n) for project map
 */

const GraphNode = require('../../../helpers/graph-node');

/**
 * Return proper build order considering dependencies
 * @param projects {string[]}
 * @param dependencies {string[][]}     Pairs of child-parent pairs, where parent needs to be built before the child
 * @returns {*}
 */
module.exports = function buildOrder(projects, dependencies) {
    const buildOrder = [];
    let buildIndex = 0;
    const projectMap = new Map();

    // initialize all projects as graph nodes with "dependencies" property set to 0
    for (const p of projects) {
        const node = new GraphNode(p);
        node.dependencies = 0;
        projectMap.set(p, node);
    }

    // create graph edges where every parent has an edge to their child (parent needs to be built before child)
    for (const dependencyPair of dependencies) {
        const [child, parent] = dependencyPair; // child requires parent to be built first
        const childNode = projectMap.get(child);
        const parentNode = projectMap.get(parent);
        childNode.dependencies++;
        parentNode.children.push(childNode);
    }

    // find all projects without dependencies and push them to build order
    for (const name of projects) {
        const node = projectMap.get(name);
        if (node.dependencies === 0) {
            buildOrder.push(name);
        }
    }

    // build a project, look at dependants (children), decrement dependency counter, if it became 0 - add to build order
    while (buildIndex < buildOrder.length) {
        const node = projectMap.get(buildOrder[buildIndex]);
        for (const child of node.children) {
            child.dependencies--;
            if (child.dependencies === 0) {
                buildOrder.push(child.val);
            }
        }
        buildIndex++;
    }

    // could not build all projects, meaning some of them depend on each other in a cycle
    if (buildOrder.length < projects.length) {
        return new Error('Cyclic dependency detected');
    }
    return buildOrder;
};
