var reverseBetween = function (head, left, right) {
    let cur = head
    let prev = null
    let medi = null
    while (left.next !== null) {
        left.next = prev
        left = left.next
        prev = left
    }
    medi = right.next
    right.next = left.next
    left.next = medi
    return cur
};