// var removeNthFromEnd = function (head, n) {
//     //万一删掉头节点怎么办
//     const dummy = new ListNode()
//     dummy.next = head
//     //如何定位倒数第n个
//     //len-n+1=倒数n

//     let cur = dummy

//     let len = 0

//     while (cur.next) {
//         len++
//         cur = cur.next
//     }

//     let pre = dummy

//     for (let i = 0; i < len - n; i++) {
//         pre = pre.next
//     }

//     if (pre.next) {
//         pre.next = pre.next.next
//     }
//     return dummy.next
// };

var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy

    //快指针先走n步   n--是为了计数
    while (n !== 0) {
        fast = fast.next
        n--
    }
    //快慢指针一起走
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};