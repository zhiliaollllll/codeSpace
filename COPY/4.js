let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    },
    a: undefined,
    b: null,
    c: function () { },
    e: Symbol('hello'),
    f: 123n,
    d: {
        n: 100
    }
}
obj.c = obj.d
obj.d.m = obj.c
let newObj = JSON.parse(JSON.stringify(obj))
// console.log(JSON.stringify(obj));
console.log(newObj);

//abe的数据类型都深拷贝不了