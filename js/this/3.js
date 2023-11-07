// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// obj.foo()
// 2//隐式绑定


// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo()
// }
// obj.foo
// undefined//默认绑定

function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
}
var obj2 = {
    a: 3,
    obj: obj
}
obj.foo
// 2//隐式绑定
