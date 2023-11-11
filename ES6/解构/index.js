// let [x, y, z] = ['a', 'b', 'c', 'd', 'e']
// console.log(x, y, z);

// let arr = [1, 2, 3]
// let newArr = [0]
// console.log(newArr.concat(arr));
// console.log([...newArr, ...arr]);
// 对象合并 Object.assign

// let { name, age } = { name: '啷个', age: 19 }
// console.log(name, age);

let { name = '杨洋', age } = { age: 19 }  //yangyang是默认值
console.log(name, age);
// name: '啷个'