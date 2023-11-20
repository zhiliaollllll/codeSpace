let arr = ['a', 'b', 'c', 'd', 'e']
for (let item of arr) {
    console.log(item);
}
// 为具有迭代器属性的数据结构打造的
// 可以遍历set和map

let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}
// for (let key in obj) {
//     console.log(key)
// }

let data = Object.create(obj)
data.sex = 'boy'
for (let key in data) {
    if (data.hasOwnProperty(key)) {//判断key属性是显示拥有还是隐式拥有的
        console.log(key)
    }
}