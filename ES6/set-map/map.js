// let obj = {
//     a: 1,
//     b: 2
// }
// var arr = [1, 2]
// obj[arr] = 3
// console.log(obj);
let map = new Map([
    ['name', '老王']
])
let obj = { a: 1 }
map.set(obj, 'hello')//有迭代器属性
console.log(map.size);