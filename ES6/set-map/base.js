let arr = ['a', 'b', 'c']
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (let item of obj) { //只能循环具有迭代器属性的
    console.log(obj);
}