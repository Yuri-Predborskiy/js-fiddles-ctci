const Stack = function() {
    this.array = [];
};

Stack.prototype.push = function(val) {
    this.array.push(val);
};

Stack.prototype.pop = function() {
    return this.array.pop();
};

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
};

Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
};

Stack.prototype.size = function() {
    return this.array.length;
};

module.exports = Stack;
