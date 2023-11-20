// 浅拷贝的实现原理
let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}
let arr = ['a', { n: 1 }, 1, 'undeifned', null]

function shallowCopy(obj) {
    // let objCopy = {}
    // if (obj instanceof Array) {
    //     objCopy = []
    // }
    if (typeof obj !== 'object' || obj == null) return//只拷贝引用类型
    let objCopy = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = obj[key]
        }
    }
    return objCopy
}

let newObj = shallowCopy(obj)
// obj.age = 20//不受影响还是18
// obj.like.type = 'swimming'//受影响变成swimming
console.log(newObj);