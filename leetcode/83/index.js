var deleteDuplicates = function (head) {
    function ListNode(val) {
        this.val = val
        this.next = null
    }
    for (let i = 0; i < head.length; i++) {
        if (head[i] === head[i + 1]) {
            this.splice(i, 1)
        }
    }
    return this
};