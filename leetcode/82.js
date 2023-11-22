var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            // cur.next.next = cur.next.next.next
            let value = cur.next.val
            while (cur.next && value === cur.next.val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};