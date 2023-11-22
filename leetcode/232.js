var MyQueue = function () {
    this.satck1 = []
    this.stack2 = []
};

MyQueue.prototype.push = function (x) {
    this.satck1.push(x)
};

MyQueue.prototype.pop = function () {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            const top = this.stack1.pop()
            this.stack2.push(top)
        }
    }
    // 将栈1的数据倒到栈2中，再出栈
    return this.stack2.pop()
};


MyQueue.prototype.peek = function () {
    let top = this.pop()
    this.stack2.push(top)
    return top
};

MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length
};