// let arr = [1, 1, 2, 3, 3]
// let obj = {
//     a: 1,
//     b: 1,
//     c: 1
// }

// let set = new Set([1, 2, 2, 3, 3, 4]) //类数组
// // console.log(set.keys());
// set.add(5)
// console.log(set.values());

//实现数组去重  字节面试题
// var arr = [1, 2, 1, 1, '1']
// function unique(arr) {
//     // let s = new Set(arr)
//     // let res = Array.from(s)//让类数组变成数组  特殊情况
//     // return res
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]

// console.log(unique)//最好

// let set = new Set([1, 2, 2, 3, 3, 4]) //类数组
// set.clear()
// console.log(set.values());

// set 遍历
// set.forEach((item, index, set) => {
//     console.log(item, index, set);
// })

// console.log(set.has(2));
// console.log(set.keys());

// Iterator 有迭代器这个属性 就能被遍历
let str = '1234'
for (let item of str) { //只能循环具有迭代器属性的
    console.log(str);
}

// for of无论set和set.keys都能遍历
// set什么时候有用，保持唯一性，去重