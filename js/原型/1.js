// Person.prototype 原型  也是对象
// 函数.方法没有办法直接往实例对象添加属性
// 没继承，但能访问
Person.prototype.say = function () {
    return 'Hello'
}
function Person() {
    this.name = '肖总'
    this.age = 18
    // this.say = function () {
    //     return 'Hello'
}
let p = new Person()
let p2 = new Person()

console.log(p.say = p2.say);