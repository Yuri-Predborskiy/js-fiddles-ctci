const ListNode = function(val) {
    this.val = val;
    this.next = null;
};

const LinkedList = function() {
    this.head = null;
};

LinkedList.prototype.appendAtTail = function(val) {
    if (!this.head) {
        this.head = new ListNode(val);
        return;
    }

    let tail = this.head;
    while (tail.next) {
        tail = tail.next;
    }
    tail.next = new ListNode(val);
};

LinkedList.prototype.delete = function(node) {
    if (node === this.head) {
        this.head = this.head.next;
        return;
    }

    let current = this.head, last = current;
    while (current !== node) {
        last = current;
        current = current.next;
    }
    last.next = current.next;
};

LinkedList.prototype.getAtHead = function() {
    return this.head;
};

module.exports = LinkedList;
