//构造函数
function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex

    let this = {
        name: name,
        age: age
        sex: sex
    }
    return this
}
let p = new Person('海军', 18, 'boy')



function Person(name, age, sex) {
    var that = {}
    that.name = name
    that.age = age
    return that
}

let p1 = Person('程总', 18)
let p2 = Person('程总', 18)