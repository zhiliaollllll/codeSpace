console.log(Number({}));//NaN
console.log(Number([]));//0

// # 对象转字符串 toString
let a = {}
a.toString()//'[object Object]'

String({})//'[object Object]'

Object.prototype.toString.call(a)//'[object Object]'

let arr = [1, 2, 3]
arr.toString()//'1,2,3'

let time = new Date()
time.toString()//'Tue Nov 21 2023 19:53:24 GMT+0800 (中国标准时间)'
// # 对象转数字 valueOf=>>给包装类用的
console.log(typeof (new Number('123')))