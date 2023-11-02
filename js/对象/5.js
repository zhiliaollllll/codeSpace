//包装类

var obj = {}
console.log(obj.a);

var num = new Number(123)
num.abc = 'abc'
console.log(num.123);
console.log(num * 2);  //参与运算时会变成数字

var str = 'abcd'
console.log(str.length); //4????


var num = 4
num.len = 3


var num = new Number(4)
num.len = 3
delete num.len

new Number(4).len   //隐式包装类
console.log(num.len)


//考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2

var str = 'abcd'
str.length = 2
//new String('abcd).length=2   delete
查找到了，但是修改不了，会瞬间被delete
console.log(str.length)这个结果还能得出4的原因是看见str.length后又执行一遍


//面试题
var str = 'abcd'
str += 1
var test = typeof (str)   //'string'
if (test.length = 6) {   //new String(test).length
    test.sign = 'typeof的返回结果可能为String'
    //new String(test).sign='typeof的返回结果可能为String'
    //delete
}
console.log(test.sign) //new String(test).sign