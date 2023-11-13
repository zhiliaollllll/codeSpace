// 声明提升
// var a
// console.log(a); undefined
// a = 1

// console.log(a); 报错
// let a = 1

// let a = 1
// if (true) {
//     console.log(a) //暂时性死区
//     let a = 2
// }

// var a = 1
// var a = 2
// console.log(a);2

// let a = 1
// let a = 2
// console.log(a); 2 报错

// let a = 1
// let a = 2
// console.log(a); 2 报错

// var a=2
// console.log(window.a);
// 用var声明的变量是挂载在window上的属性

// const a = 1
// a = 2
// console.log(a);报错

const obj = {
    name: '君君'
}
obj.name = '程晨'
console.log(obj);

// 为什么不放调用栈
// 内存泄漏