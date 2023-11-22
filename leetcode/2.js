var addTwoNumbers = function (l1, l2) {
    this.l1 = (l1 === undefined ? 0 : l1)
    this.l2 = (l2 === undefined ? null : l2)
};

var addTwoNumbers = function (l1, l2) {


    
    // 2.让个十百千分为数组
    // 3.倒转
    // 0.链表转成数列
    class ListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    function linkedListToArray(head) {
        const result1 = []
        let current = head
        while (current) {
            result1.push(current.value)
            current = current.next
        }
        return result1
    }
    function linkedListToArray(head) {
        const result2 = []
        let current = head
        while (current) {
            result2.push(current.value)
            current = current.next
        }
        return result2
    }
    var number1 = result1.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    var number2 = result2.reduce(function (accumulator2, currentValue2) {
        return accumulator2 + currentValue2;
    }, 0)
    // 1.算出两数相加
    var sum = number1 + number2
    var string = sum.toString()
    var my_array = string.split('').map(Number)
    my_array.reverse()
};