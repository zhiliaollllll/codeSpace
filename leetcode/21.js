// @param { ListNode } list1
// @param { ListNode } list2
// @return { ListNode }

let list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
let list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}
var mergeTwoLists = function (list1, list2) {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode()
    let cur = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    //睡得长度有剩余
    cur.next = list1 == null ? list2 : list1
    return head.next
}
