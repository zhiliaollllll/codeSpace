let num = 123
let str = 'hello'
let n = null
let un = undefined
let flag = true

let big = 123n
let sy = Symbol(123)

// console.log(Boolean(+0)); //false
// console.log(Boolean(+0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean(-1)); //true
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean('123')); //true
// console.log(Boolean('')); //false
// console.log(Boolean(' ')); //true

// console.log(Number('hello'));//NaN
// console.log(Number(undefined));//NaN
// console.log(Number(null));//0
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(false));//0
// console.log(Number('00100.23'));//100.23

// console.log(String());//''
// console.log(String(123));//'123'
// console.log(String(0));//'0'
// console.log(String(NaN));//'NaN'
// console.log(String(Infinity));//'Infinity'

console.log(Object('123'));//'Infinity'
console.log(Object(123));//'Infinity'

console.log(new Number('123'));//'Infinity'