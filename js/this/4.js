function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
}
foo()
undefined//默认绑定


function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
}
foo.call(obj)
2//显式绑定

function foo(n) {
    console.log(this.a, n);
}
var obj = {
    a: 2,
}
foo.call(obj, 100)
2//显式绑定


function foo(n) {
    console.log(this.a, n);
}
var obj = {
    a: 2,
}
foo.apply(obj, [100, 200])
2//显式绑定

function foo(n) {
    console.log(this.a, n);
}
var obj = {
    a: 2,
}
var bar = foo.bind(obj, 100, 200)
bar()
2//显式绑定