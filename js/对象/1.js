#对象
//原始数据类型

let a = 'hello'
let b = 123
let c = true
let d = underfined
let n = null

let a = 1
let b = a
a = 2
console.log(b);
b = 1
//引用类型
let obj = {
    name='小花'
}
let lw = obj
obj.name = '小红'

console.log(lw.name)
lw.name=xiaohong 
obj
内存泄漏
obj对象的数据存储和栈